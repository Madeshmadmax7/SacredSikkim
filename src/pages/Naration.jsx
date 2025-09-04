// import React, { useState, useEffect, useRef } from 'react';
// import { ChevronLeft, ChevronRight, Volume2, VolumeX, Play, Pause, Globe } from 'lucide-react';

// // Sample tour data
// const tourData = [
//     {
//         id: "scene1",
//         title: "Monastery Hall",
//         image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjA0OCIgaGVpZ2h0PSIxMDI0IiB2aWV3Qm94PSIwIDAgMjA0OCAxMDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cmFkaWFsR3JhZGllbnQgaWQ9InNreSIgY3g9IjUwJSIgY3k9IjMwJSIgcj0iNzAlIj4KICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM4N0NFRUIiLz4KICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzQ2OEJCRCIvPgogIDwvcmFkaWFsR3JhZGllbnQ+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJmbG9vciIgeDE9IjAlIiB5MT0iNzAlIiB4Mj0iMCUiIHkyPSIxMDAlIj4KICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM4QjczNTUiLz4KICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzVENEUzNyIvPgogIDwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KICA8IS0tIFNreSAtLT4KICA8cmVjdCB3aWR0aD0iMjA0OCIgaGVpZ2h0PSI3MDAiIGZpbGw9InVybCgjc2t5KSIvPgogIDwhLS0gV2FsbHMgLS0+CiAgPHJlY3QgeD0iMCIgeT0iMzAwIiB3aWR0aD0iMjA0OCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNEMkIyOEYiLz4KICA8IS0tIENvbHVtbnMgLS0+CiAgPHJlY3QgeD0iMzAwIiB5PSIyMDAiIHdpZHRoPSI4MCIgaGVpZ2h0PSI1MDAiIGZpbGw9IiM5QjhCNjYiLz4KICA8cmVjdCB4PSI3MDAiIHk9IjIwMCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjUwMCIgZmlsbD0iIzlCOEI2NiIvPgogIDxyZWN0IHg9IjExMDAiIHk9IjIwMCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjUwMCIgZmlsbD0iIzlCOEI2NiIvPgogIDxyZWN0IHg9IjE1MDAiIHk9IjIwMCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjUwMCIgZmlsbD0iIzlCOEI2NiIvPgogIDwhLS0gRmxvb3IgLS0+CiAgPHJlY3QgeD0iMCIgeT0iNzAwIiB3aWR0aD0iMjA0OCIgaGVpZ2h0PSIzMjQiIGZpbGw9InVybCgjZmxvb3IpIi8+CiAgPCEtLSBXaW5kb3dzIC0tPgogIDxyZWN0IHg9IjUwMCIgeT0iMzUwIiB3aWR0aD0iMTUwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzg3Q0VFQiIvPgogIDxyZWN0IHg9IjkwMCIgeT0iMzUwIiB3aWR0aD0iMTUwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzg3Q0VFQiIvPgogIDxyZWN0IHg9IjEzMDAiIHk9IjM1MCIgd2lkdGg9IjE1MCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiM4N0NFRUIiLz4KPC9zdmc+",
//         narration: {
//             en: "Welcome to the magnificent Monastery Hall. This sacred space has witnessed centuries of prayer and meditation. Notice the ancient stone columns that support the vaulted ceiling, each carved by master craftsmen. The light streaming through the stained glass windows creates a divine atmosphere perfect for contemplation.",
//             hi: "भव्य मठ हॉल में आपका स्वागत है। इस पवित्र स्थान ने सदियों से प्रार्थना और ध्यान देखा है। उन प्राचीन पत्थर के स्तंभों पर ध्यान दें जो मेहराबदार छत को सहारा देते हैं। रंगीन कांच की खिड़कियों से आने वाला प्रकाश चिंतन के लिए एक दिव्य वातावरण बनाता है।"
//         }
//     },
//     {
//         id: "scene2",
//         title: "Prayer Garden",
//         image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjA0OCIgaGVpZ2h0PSIxMDI0IiB2aWV3Qm94PSIwIDAgMjA0OCAxMDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cmFkaWFsR3JhZGllbnQgaWQ9InNreTIiIGN4PSI1MCUiIGN5PSIyMCUiIHI9IjgwJSI+CiAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjOEZCQ0ZGIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM0QTkwRTIiLz4KICA8L3JhZGlhbEdyYWRpZW50PgogIDxsaW5lYXJHcmFkaWVudCBpZD0iZ3Jhc3MiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMCUiIHkyPSIxMDAlIj4KICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM3Q0IzNDIiLz4KICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzU1ODUyQSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KICA8IS0tIFNreSAtLT4KICA8cmVjdCB3aWR0aD0iMjA0OCIgaGVpZ2h0PSI2MDAiIGZpbGw9InVybCgjc2t5MikiLz4KICA8IS0tIEdyYXNzIC0tPgogIDxyZWN0IHg9IjAiIHk9IjYwMCIgd2lkdGg9IjIwNDgiIGhlaWdodD0iNDI0IiBmaWxsPSJ1cmwoI2dyYXNzKSIvPgogIDwhLS0gVHJlZXMgLS0+CiAgPGNpcmNsZSBjeD0iMjAwIiBjeT0iNDUwIiByPSIxMDAiIGZpbGw9IiM0QTkwMzMiLz4KICA8cmVjdCB4PSIxODAiIHk9IjUwMCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iIzY1NEMyQSIvPgogIDxjaXJjbGUgY3g9IjgwMCIgY3k9IjQwMCIgcj0iMTIwIiBmaWxsPSIjNEE5MDMzIi8+CiAgPHJlY3QgeD0iNzgwIiB5PSI0NzAiIHdpZHRoPSI0MCIgaGVpZ2h0PSIxODAiIGZpbGw9IiM2NTRDMUE+CiAgPGNpcmNsZSBjeD0iMTQwMCIgY3k9IjQyMCIgcj0iMTEwIiBmaWxsPSIjNEE5MDMzIi8+CiAgPHJlY3QgeD0iMTM4MCIgeT0iNDkwIiB3aWR0aD0iNDAiIGhlaWdodD0iMTYwIiBmaWxsPSIjNjU0QzFBIi8+CiAgPGNpcmNsZSBjeD0iMTgwMCIgY3k9IjQ2MCIgcj0iOTAiIGZpbGw9IiM0QTkwMzMiLz4KICA8cmVjdCB4PSIxNzgwIiB5PSI1MjAiIHdpZHRoPSI0MCIgaGVpZ2h0PSIxMzAiIGZpbGw9IiM2NTRDMUE+CiAgPCEtLSBGbG93ZXJzIC0tPgogIDxjaXJjbGUgY3g9IjUwMCIgY3k9IjcwMCIgcj0iMjAiIGZpbGw9IiNGRkY2QjMiLz4KICA8Y2lyY2xlIGN4PSI2MDAiIGN5PSI3NTAiIHI9IjE1IiBmaWxsPSIjRkY2QkI4Ii8+CiAgPGNpcmNsZSBjeD0iMTAwMCIgY3k9IjcyMCIgcj0iMTgiIGZpbGw9IiNGRjZCQjgiLz4KICA8Y2lyY2xlIGN4PSIxMjAwIiBjeT0iNzgwIiByPSIyMiIgZmlsbD0iI0ZGRjZCMyIvPgogIDxjaXJjbGUgY3g9IjE2MDAiIGN5PSI3MzAiIHI9IjE2IiBmaWxsPSIjRkY2QkI4Ii8+Cjwvc3ZnPg==",
//         narration: {
//             en: "Now you find yourself in the serene Prayer Garden. This peaceful sanctuary is where monks come for quiet reflection and meditation. The ancient trees have grown alongside the monastery for hundreds of years. Listen carefully and you might hear the gentle rustling of leaves and distant monastery bells calling the faithful to prayer.",
//             hi: "अब आप शांत प्रार्थना उद्यान में हैं। यह शांतिपूर्ण अभयारण्य है जहां भिक्षु मौन चिंतन और ध्यान के लिए आते हैं। प्राचीन पेड़ सैकड़ों वर्षों से मठ के साथ-साथ बढ़े हैं। ध्यान से सुनें और आप पत्तियों की कोमल सरसराहट और दूर की मठ की घंटी सुन सकते हैं।"
//         }
//     }
// ];

// // Simple 360° panorama viewer component
// const PanoramaViewer = ({ imageUrl, onLoad }) => {
//     const canvasRef = useRef(null);
//     const [isLoaded, setIsLoaded] = useState(false);
//     const [rotation, setRotation] = useState(0);
//     const [isDragging, setIsDragging] = useState(false);
//     const [lastX, setLastX] = useState(0);

//     useEffect(() => {
//         const canvas = canvasRef.current;
//         if (!canvas) return;

//         const ctx = canvas.getContext('2d');
//         const img = new Image();

//         img.onload = () => {
//             setIsLoaded(true);
//             if (onLoad) onLoad();

//             const draw = (rotOffset = 0) => {
//                 const canvasWidth = canvas.width;
//                 const canvasHeight = canvas.height;

//                 ctx.clearRect(0, 0, canvasWidth, canvasHeight);

//                 // Create a panoramic effect by drawing the image twice with offset
//                 const imgWidth = img.width;
//                 const imgHeight = img.height;

//                 // Scale to fit height
//                 const scale = canvasHeight / imgHeight;
//                 const scaledWidth = imgWidth * scale;

//                 // Calculate source and destination rectangles for seamless wrapping
//                 const offset = (rotOffset % scaledWidth + scaledWidth) % scaledWidth;

//                 // Draw first part
//                 ctx.drawImage(
//                     img,
//                     offset / scale, 0, (scaledWidth - offset) / scale, imgHeight,
//                     0, 0, scaledWidth - offset, canvasHeight
//                 );

//                 // Draw second part for seamless wrap
//                 if (offset > 0) {
//                     ctx.drawImage(
//                         img,
//                         0, 0, offset / scale, imgHeight,
//                         scaledWidth - offset, 0, offset, canvasHeight
//                     );
//                 }
//             };

//             draw(rotation);
//         };

//         img.src = imageUrl;

//         // Auto-rotate
//         const rotateInterval = setInterval(() => {
//             if (!isDragging) {
//                 setRotation(prev => {
//                     const newRot = prev + 0.5;
//                     requestAnimationFrame(() => {
//                         if (img.complete) {
//                             const ctx = canvas.getContext('2d');
//                             const canvasWidth = canvas.width;
//                             const canvasHeight = canvas.height;
//                             const scale = canvasHeight / img.height;
//                             const scaledWidth = img.width * scale;
//                             const offset = (newRot % scaledWidth + scaledWidth) % scaledWidth;

//                             ctx.clearRect(0, 0, canvasWidth, canvasHeight);
//                             ctx.drawImage(
//                                 img,
//                                 offset / scale, 0, (scaledWidth - offset) / scale, img.height,
//                                 0, 0, scaledWidth - offset, canvasHeight
//                             );
//                             if (offset > 0) {
//                                 ctx.drawImage(
//                                     img,
//                                     0, 0, offset / scale, img.height,
//                                     scaledWidth - offset, 0, offset, canvasHeight
//                                 );
//                             }
//                         }
//                     });
//                     return newRot;
//                 });
//             }
//         }, 50);

//         return () => clearInterval(rotateInterval);
//     }, [imageUrl, rotation, isDragging, onLoad]);

//     const handleMouseDown = (e) => {
//         setIsDragging(true);
//         setLastX(e.clientX);
//     };

//     const handleMouseMove = (e) => {
//         if (isDragging) {
//             const deltaX = e.clientX - lastX;
//             setRotation(prev => prev - deltaX * 2);
//             setLastX(e.clientX);
//         }
//     };

//     const handleMouseUp = () => {
//         setIsDragging(false);
//     };

//     return (
//         <canvas
//             ref={canvasRef}
//             width={800}
//             height={400}
//             className="w-full h-full cursor-grab active:cursor-grabbing"
//             onMouseDown={handleMouseDown}
//             onMouseMove={handleMouseMove}
//             onMouseUp={handleMouseUp}
//             onMouseLeave={handleMouseUp}
//             style={{ touchAction: 'none' }}
//         />
//     );
// };

// // Audio narration component
// const NarrationPlayer = ({ text, language, isPlaying, onPlayingChange }) => {
//     const [audio, setAudio] = useState(null);
//     const [isLoading, setIsLoading] = useState(false);

//     useEffect(() => {
//         // Create a simple text-to-speech like experience
//         if ('speechSynthesis' in window && text) {
//             const utterance = new SpeechSynthesisUtterance(text);
//             utterance.lang = language === 'hi' ? 'hi-IN' : 'en-US';
//             utterance.rate = 0.8;
//             utterance.pitch = 1;

//             utterance.onend = () => {
//                 onPlayingChange(false);
//             };

//             setAudio(utterance);
//         }

//         return () => {
//             if ('speechSynthesis' in window) {
//                 speechSynthesis.cancel();
//             }
//         };
//     }, [text, language]);

//     useEffect(() => {
//         if (audio && isPlaying) {
//             speechSynthesis.speak(audio);
//         } else {
//             speechSynthesis.cancel();
//         }
//     }, [audio, isPlaying]);

//     const togglePlayback = () => {
//         if (isPlaying) {
//             speechSynthesis.cancel();
//             onPlayingChange(false);
//         } else {
//             if (audio) {
//                 speechSynthesis.speak(audio);
//                 onPlayingChange(true);
//             }
//         }
//     };

//     return (
//         <button
//             onClick={togglePlayback}
//             className="flex items-center space-x-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
//         >
//             {isPlaying ? <Pause size={20} /> : <Play size={20} />}
//             <span>{isPlaying ? 'Pause' : 'Play'} Narration</span>
//         </button>
//     );
// };

// // Main App Component
// const MonasteryWalkthrough = () => {
//     const [currentPage, setCurrentPage] = useState('landing');
//     const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
//     const [language, setLanguage] = useState('en');
//     const [isNarrationPlaying, setIsNarrationPlaying] = useState(false);
//     const [isSceneLoaded, setIsSceneLoaded] = useState(false);

//     const currentScene = tourData[currentSceneIndex];

//     // Auto-start narration when scene loads
//     useEffect(() => {
//         if (isSceneLoaded && currentPage === 'walkthrough') {
//             setTimeout(() => {
//                 setIsNarrationPlaying(true);
//             }, 1000);
//         }
//     }, [isSceneLoaded, currentSceneIndex, currentPage]);

//     const nextScene = () => {
//         if (currentSceneIndex < tourData.length - 1) {
//             setIsNarrationPlaying(false);
//             setIsSceneLoaded(false);
//             setCurrentSceneIndex(currentSceneIndex + 1);
//         }
//     };

//     const prevScene = () => {
//         if (currentSceneIndex > 0) {
//             setIsNarrationPlaying(false);
//             setIsSceneLoaded(false);
//             setCurrentSceneIndex(currentSceneIndex - 1);
//         }
//     };

//     const handleSceneLoad = () => {
//         setIsSceneLoaded(true);
//     };

//     if (currentPage === 'landing') {
//         return (
//             <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center">
//                 <div className="text-center max-w-2xl mx-auto px-6">
//                     <div className="mb-8">
//                         <h1 className="text-6xl font-bold text-amber-900 mb-4">
//                             Monastery Walkthrough 360°
//                         </h1>
//                         <p className="text-xl text-amber-700 mb-8">
//                             Embark on a sacred journey through ancient monastery halls and peaceful gardens.
//                             Experience the tranquility and spiritual atmosphere in immersive 360° views.
//                         </p>
//                     </div>

//                     <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-8">
//                         <div className="grid grid-cols-2 gap-6 mb-6">
//                             <div className="text-center">
//                                 <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-3">
//                                     <Globe className="text-white" size={32} />
//                                 </div>
//                                 <h3 className="font-semibold text-amber-900 mb-2">360° Views</h3>
//                                 <p className="text-sm text-amber-700">Explore every corner with immersive panoramic views</p>
//                             </div>
//                             <div className="text-center">
//                                 <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-3">
//                                     <Volume2 className="text-white" size={32} />
//                                 </div>
//                                 <h3 className="font-semibold text-amber-900 mb-2">Audio Narration</h3>
//                                 <p className="text-sm text-amber-700">Listen to detailed descriptions in multiple languages</p>
//                             </div>
//                         </div>

//                         <button
//                             onClick={() => setCurrentPage('walkthrough')}
//                             className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-12 py-4 rounded-full text-xl font-semibold hover:from-amber-700 hover:to-orange-700 transition-all transform hover:scale-105 shadow-lg"
//                         >
//                             Start Sacred Journey
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen bg-gray-900">
//             {/* Header */}
//             <header className="bg-black/50 backdrop-blur-sm p-4 flex items-center justify-between">
//                 <div>
//                     <h1 className="text-2xl font-bold text-white">{currentScene.title}</h1>
//                     <p className="text-amber-300">Scene {currentSceneIndex + 1} of {tourData.length}</p>
//                 </div>

//                 <div className="flex items-center space-x-4">
//                     {/* Language Selector */}
//                     <select
//                         value={language}
//                         onChange={(e) => setLanguage(e.target.value)}
//                         className="bg-amber-600 text-white px-3 py-2 rounded-lg"
//                     >
//                         <option value="en">English</option>
//                         <option value="hi">हिंदी</option>
//                     </select>

//                     <button
//                         onClick={() => setCurrentPage('landing')}
//                         className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors"
//                     >
//                         Home
//                     </button>
//                 </div>
//             </header>

//             {/* Main 360° Viewer */}
//             <div className="relative h-[70vh] min-h-96">
//                 <PanoramaViewer
//                     imageUrl={currentScene.image}
//                     onLoad={handleSceneLoad}
//                 />

//                 {!isSceneLoaded && (
//                     <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-10">
//                         <div className="text-white text-xl">Loading sacred space...</div>
//                     </div>
//                 )}

//                 {/* Scene Info Overlay */}
//                 <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm rounded-lg p-3 z-20">
//                     <h3 className="text-white font-semibold">{currentScene.title}</h3>
//                     <p className="text-amber-300 text-sm">360° Interactive View</p>
//                 </div>
//             </div>

//             {/* Controls */}
//             <div className="bg-black/50 backdrop-blur-sm p-6">
//                 <div className="max-w-4xl mx-auto">
//                     {/* Navigation */}
//                     <div className="flex items-center justify-between mb-6">
//                         <button
//                             onClick={prevScene}
//                             disabled={currentSceneIndex === 0}
//                             className="flex items-center space-x-2 px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//                         >
//                             <ChevronLeft size={20} />
//                             <span>Previous</span>
//                         </button>

//                         <div className="flex items-center space-x-2">
//                             {tourData.map((_, index) => (
//                                 <button
//                                     key={index}
//                                     onClick={() => {
//                                         setIsNarrationPlaying(false);
//                                         setIsSceneLoaded(false);
//                                         setCurrentSceneIndex(index);
//                                     }}
//                                     className={`w-3 h-3 rounded-full transition-colors ${index === currentSceneIndex ? 'bg-amber-500' : 'bg-gray-600'
//                                         }`}
//                                 />
//                             ))}
//                         </div>

//                         <button
//                             onClick={nextScene}
//                             disabled={currentSceneIndex === tourData.length - 1}
//                             className="flex items-center space-x-2 px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//                         >
//                             <span>Next</span>
//                             <ChevronRight size={20} />
//                         </button>
//                     </div>

//                     {/* Narration Controls and Text */}
//                     <div className="bg-black/30 rounded-xl p-6">
//                         <div className="flex items-center justify-between mb-4">
//                             <h3 className="text-xl font-semibold text-white">Sacred Narration</h3>
//                             <NarrationPlayer
//                                 text={currentScene.narration[language]}
//                                 language={language}
//                                 isPlaying={isNarrationPlaying}
//                                 onPlayingChange={setIsNarrationPlaying}
//                             />
//                         </div>

//                         <div className="text-gray-300 leading-relaxed">
//                             {currentScene.narration[language]}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MonasteryWalkthrough;