// Team Members: Maddie Hershberger & Avi Thalman
// Name: Mya Reynolds
// Date: 1.22.2024
// Program: Maze
// Bolt ID: SB-52F9
//Start message

//Start Maze
async function startProgram() {
await scrollMatrixText('Start', { r: 66, g: 56, b: 255 }, 30, true)
await speak("Start", true);

//Blue: Checkpoint 1
async function startProgram() {
	await roll(0, 50, 3)
	await delay (1)
	setMainLed({ r: 0, g: 0, b: 255 });

//Checkpoint 2: Sound 1
	await roll (90, 50, 2.2)
	await delay (1)	
	await Sound.Animal.play(true)
	
//Checkpoint 3: Red
	await roll (180, 50, 1.5)
	await delay (1)
	await roll (220, 65, 1)
	await delay (1)
	setMainLed({ r: 255, g: 0, b: 0 });

//Checkpoint 4: Sound #2
	await roll (120, 50, 0.8)
	await delay (1)
	await roll (45, 55, 1.1)
	await Sound.Animal.play(true)

//Checkpoint 5: Green
	await roll(120, 50, 1)
	await delay (1)
	await roll (140, 65, 1)
	await delay (1)
	setMainLed({ r: 0, g: 255, b: 0 });
}