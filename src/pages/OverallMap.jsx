// OverallMap.jsx
import React, { useLayoutEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_india2019High from "@amcharts/amcharts4-geodata/india2019High";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

const monasteryCoords = [
    { latitude: 27.3366, longitude: 88.6139, title: "Rumtek Monastery" },
    { latitude: 27.3097, longitude: 88.2495, title: "Pemayangtse Monastery" },
    { latitude: 27.2586, longitude: 88.2627, title: "Tashiding Monastery" },
    { latitude: 27.3456, longitude: 88.6136, title: "Enchey Monastery" },
    { latitude: 27.225, longitude: 88.365, title: "Ralang Monastery" },
    { latitude: 27.5, longitude: 88.6, title: "Phodong Monastery" },
    { latitude: 27.3803, longitude: 88.4538, title: "Dubdi Monastery" },
    { latitude: 27.2885, longitude: 88.9114, title: "Lingdum Monastery" },
    { latitude: 27.2912, longitude: 88.723, title: "Sanga Choeling Monastery" },
    { latitude: 27.161, longitude: 88.238, title: "Kartok Monastery" },
    { latitude: 27.3182, longitude: 88.605, title: "Tsuklakhang Palace Monastery" }
];

const OverallMap = () => {
    useLayoutEffect(() => {
        am4core.useTheme(am4themes_animated);

        let chart = am4core.create("chartdiv", am4maps.MapChart);
        chart.geodata = am4geodata_india2019High;
        chart.projection = new am4maps.projections.Miller();

        chart.homeGeoPoint = { latitude: 27.3, longitude: 88.6 };
        chart.homeZoomLevel = 8;
        chart.maxZoomLevel = 50;
        chart.minZoomLevel = 5;

        chart.zoomControl = new am4maps.ZoomControl();
        chart.events.on("ready", () => {
            chart.zoomToGeoPoint({ latitude: 27.3, longitude: 88.6 }, 15, true);
        });

        // Background polygons
        let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
        polygonSeries.useGeodata = true;
        polygonSeries.exclude = ["AQ"];
        polygonSeries.mapPolygons.template.fill = am4core.color("#2f3e4e");
        polygonSeries.mapPolygons.template.stroke = am4core.color("#ffffff");

        // Monastery markers
        let monasteries = chart.series.push(new am4maps.MapImageSeries());
        monasteries.mapImages.template.nonScaling = true;

        let circle = monasteries.mapImages.template.createChild(am4core.Circle);
        circle.radius = 6;
        circle.fill = am4core.color("#FFD700");
        circle.stroke = am4core.color("#fff");
        circle.strokeWidth = 2;

        function addMonastery(coords, title) {
            let m = monasteries.mapImages.create();
            m.latitude = coords.latitude;
            m.longitude = coords.longitude;
            m.tooltipText = title;
            return m;
        }

        let monasteryObjs = monasteryCoords.map(m => addMonastery(m, m.title));

        // Flight path (line + shadow line)
        let lineSeries = chart.series.push(new am4maps.MapArcSeries());
        lineSeries.mapLines.template.line.strokeWidth = 2;
        lineSeries.mapLines.template.line.strokeOpacity = 0.7;
        lineSeries.mapLines.template.line.stroke = am4core.color("#FFD700");
        lineSeries.mapLines.template.line.nonScalingStroke = true;
        lineSeries.zIndex = 10; // ✅ plane path on top

        let shadowLineSeries = chart.series.push(new am4maps.MapLineSeries());
        shadowLineSeries.mapLines.template.line.strokeOpacity = 0;
        shadowLineSeries.mapLines.template.line.nonScalingStroke = true;
        shadowLineSeries.mapLines.template.shortestDistance = false;
        shadowLineSeries.zIndex = 5; // ✅ shadow path below

        function addLine(from, to) {
            let line = lineSeries.mapLines.create();
            line.imagesToConnect = [from, to];
            line.line.controlPointDistance = -0.2;
            line.line.controlPointPosition = 0.5;

            let shadowLine = shadowLineSeries.mapLines.create();
            shadowLine.imagesToConnect = [from, to];
            return line;
        }

        for (let i = 0; i < monasteryObjs.length - 1; i++) {
            addLine(monasteryObjs[i], monasteryObjs[i + 1]);
        }

        // Plane
        let plane = lineSeries.mapLines.getIndex(0).lineObjects.create();
        plane.position = 0;
        plane.width = 40;
        plane.height = 40;

        let planeImage = plane.createChild(am4core.Sprite);
        planeImage.scale = 0.005;
        planeImage.horizontalCenter = "middle";
        planeImage.verticalCenter = "middle";
        planeImage.path =
            "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";
        planeImage.fill = am4core.color("#f39c12");
        planeImage.strokeOpacity = 0;

        // Shadow plane
        let shadowPlane = shadowLineSeries.mapLines.getIndex(0).lineObjects.create();
        shadowPlane.position = 0;
        shadowPlane.width = 40;
        shadowPlane.height = 40;

        let shadowPlaneImage = shadowPlane.createChild(am4core.Sprite);
        shadowPlaneImage.scale = 0.005;
        shadowPlaneImage.horizontalCenter = "middle";
        shadowPlaneImage.verticalCenter = "middle";
        shadowPlaneImage.path =
            "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";
        shadowPlaneImage.fill = am4core.color("#000");
        shadowPlaneImage.opacity = 0.3;
        shadowPlaneImage.strokeOpacity = 0;

        // Inside useLayoutEffect, after creating plane:
        plane.adapter.add("scale", (scale, target) => {
            // make it grow slightly in the middle of the path
            return 0.6 + 0.2 * (1 - Math.abs(0.5 - target.position) * 2);
        });

        shadowPlane.adapter.add("scale", (scale, target) => {
            // shadow stays smaller and fades a bit
            shadowPlaneImage.opacity = 0.6 - Math.abs(0.5 - target.position);
            return 0.5 - 0.2 * (1 - Math.abs(0.5 - target.position) * 2);
        });

        // In flyPlane() → replace the animation easing
        let anim = plane.animate(
            { from: 0, to: 1, property: "position" },
            5000,
            am4core.ease.sinInOut   // ✅ smoother glide
        );
        shadowPlane.animate(
            { from: 0, to: 1, property: "position" },
            5000,
            am4core.ease.sinInOut
        );

        // Sync shadow with plane
        shadowPlane.adapter.add("position", () => plane.position);

        plane.adapter.add("rotation", (rotation, target) => {
            if (!target.mapLine) return rotation;
            let line = target.mapLine.line;
            let position = target.position;
            let p1 = line.positionToPoint(position);
            let p2 = line.positionToPoint(position + 0.002);
            return Math.atan2(p2.y - p1.y, p2.x - p1.x) * (180 / Math.PI);
        });

        shadowPlane.adapter.add("rotation", (rotation, target) => {
            if (!target.mapLine) return rotation;
            let line = target.mapLine.line;
            let position = target.position;
            let p1 = line.positionToPoint(position);
            let p2 = line.positionToPoint(position + 0.002);
            return Math.atan2(p2.y - p1.y, p2.x - p1.x) * (180 / Math.PI);
        });

        // Animate along lines
        let currentLine = 0;

        function flyPlane() {
            plane.mapLine = lineSeries.mapLines.getIndex(currentLine);
            shadowPlane.mapLine = shadowLineSeries.mapLines.getIndex(currentLine);

            // ✅ enforce layering
            plane.parent = lineSeries;
            shadowPlane.parent = shadowLineSeries;

            let anim = plane.animate({ from: 0, to: 1, property: "position" }, 5000, am4core.ease.linear);
            shadowPlane.animate({ from: 0, to: 1, property: "position" }, 5000, am4core.ease.linear);

            anim.events.on("animationended", () => {
                currentLine++;
                if (currentLine >= lineSeries.mapLines.length) {
                    currentLine = 0;
                    chart.zoomToGeoPoint({ latitude: 27.3, longitude: 88.6 }, 20, true);
                }
                flyPlane();
            });
        }

        flyPlane();

        return () => {
            chart.dispose();
        };
    }, []);

    return (
        <div className="w-full h-screen bg-black flex items-center justify-center">
            <div id="chartdiv" className="w-5/6 h-5/6 rounded-xl shadow-lg" />
        </div>
    );
};

export default OverallMap;
