// Team Members: Maddie Hershberger & Avi Thalman
// Name: Mya Reynolds
// Date: 1.22.2024
// Program: Maze
// Bolt ID: SB-52F9
//Start message
/*
// Start Maze
async function startProgram() {
await scrollMatrixText('Start', { r: 66, g: 56, b: 255 }, 30, true)
await speak("Start", true);
*/

//Blue: Checkpoint 1
async function startProgram() {
	await roll(0, 50, 5)
	await delay (3)
	setMainLed({ r: 0, g: 0, b: 255 });
}