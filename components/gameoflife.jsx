"use client";
import React from 'react';

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.canvas = React.createRef();
		this.state = false;
		this.init = this.init.bind(this);
		this.draw = this.draw.bind(this);
		this.step = this.step.bind(this);
		this.randomize = this.randomize.bind(this);
		this.clear = this.clear.bind(this);
		this.toggleCell = this.toggleCell.bind(this);
		this.countNeighbours = this.countNeighbours.bind(this);
		this.frameIndex = 0;
		this.hasStarted = false;
	}

	componentDidMount() {
		this.canvas = this.canvas.current;
		this.ctx = this.canvas.getContext('2d');
		this.matrix = undefined;
		this.round = 0;
		// Merge of the default and delivered config.
		const defaults = {
			cellsX: 100,
			cellsY: 54,
			cellSize: 8,
			rules: '24/2',
			gridColor: '#eee',
			cellColor: '#eee',
			darkCellColor: '#ddd',
		};

		this.cfg = defaults;
		// this.cfg = $.extend({}, defaults, cfg);
		if (typeof window !== `undefined`) {
			if (window.innerWidth > 1500) {
				this.cfg.cellsX = 100 + Math.round((window.innerWidth - 1500) / 12);
			}
			if (window.innerWidth < 600) {
				this.cfg.cellsY = 36;
			}
		}

		// Initialize the canvas and matrix.
		this.init();
	}

	componentWillUnmount() {
		window.cancelAnimationFrame(this.rAF);
	}

	init() {
		// set canvas dimensions
		this.canvas.width = this.cfg.cellsX * this.cfg.cellSize;
		this.canvas.height = this.cfg.cellsY * this.cfg.cellSize;

		// initialize matrix
		this.matrix = new Array(this.cfg.cellsX);
		for (let x = 0; x < this.matrix.length; x += 1) {
			this.matrix[x] = new Array(this.cfg.cellsY);
			for (let y = 0; y < this.matrix[x].length; y += 1) {
				this.matrix[x][y] = false;
			}
		}

		this.randomize();
	}

	draw() {
		let x;
		let y;
		// clear canvas and set colors
		this.canvas.width = this.canvas.width;
		this.ctx.strokeStyle = this.cfg.gridColor;
		this.ctx.fillStyle = this.cfg.cellColor;

		// draw grid
		for (x = 0.5; x < this.cfg.cellsX * this.cfg.cellSize; x += this.cfg.cellSize) {
			this.ctx.moveTo(x, 0);
			this.ctx.lineTo(x, this.cfg.cellsY * this.cfg.cellSize);
		}

		for (y = 0.5; y < this.cfg.cellsY * this.cfg.cellSize; y += this.cfg.cellSize) {
			this.ctx.moveTo(0, y);
			this.ctx.lineTo(this.cfg.cellsX * this.cfg.cellSize, y);
		}

		this.ctx.stroke();

		// draw matrix
		for (x = 0; x < this.matrix.length; x += 1) {
			for (y = 0; y < this.matrix[x].length; y += 1) {
				if (this.matrix[x][y]) {
					if (this.matrix[x][y] === 2) {
						this.ctx.fillStyle = this.cfg.cellColor;
					} else {
						this.ctx.fillStyle = this.cfg.darkCellColor;
					}
					this.ctx.fillRect(
						x * this.cfg.cellSize + 1,
						y * this.cfg.cellSize + 1,
						this.cfg.cellSize - 1,
						this.cfg.cellSize - 1
					);
				}
			}
		}
	}

	/**
	 * Calculates the new state by applying the rules.
	 * All changes were made in a buffer matrix and swapped at the end.
	 */
	step() {
		if (this.frameIndex % 2 === 0) {
			// initalize buffer
			let x;
			let y;
			const buffer = new Array(this.matrix.length);
			for (x = 0; x < buffer.length; x += 1) {
				buffer[x] = new Array(this.matrix[x].length);
			}

			// calculate one step
			for (x = 0; x < this.matrix.length; x += 1) {
				for (y = 0; y < this.matrix[x].length; y += 1) {
					// count neighbours
					const neighbours = this.countNeighbours(x, y);

					// use rules
					if (this.matrix[x][y]) {
						if (neighbours === 2 || neighbours === 3) buffer[x][y] = 1;
						if (neighbours < 2 || neighbours > 3) buffer[x][y] = false;
					} else {
						if (neighbours === 3) {
							buffer[x][y] = 2;
						}
					}
				}
			}

			// flip buffers
			this.matrix = buffer;
			this.round += 1;
			this.draw();
		}
		this.frameIndex += 1;
		this.rAF = window.requestAnimationFrame(this.step);
	}

	/**
	 * Counts the living neighbours of the cell at the given coordinates.
	 * A cell can have up to 8 neighbours. Borders are concidered as dead.
	 *
	 * @param cx horizontal coordinates of the given cell
	 * @param cy vertical coordinates of the given cell
	 * @return the number of living neighbours
	 */
	countNeighbours(cx, cy) {
		let count = 0;

		for (let x = cx - 1; x <= cx + 1; x += 1) {
			for (let y = cy - 1; y <= cy + 1; y += 1) {
				if (x === cx && y === cy) continue;
				if (x < 0 || x >= this.matrix.length || y < 0 || y >= this.matrix[x].length) continue;
				if (this.matrix[x][y]) count += 1;
			}
		}

		return count;
	}

	/**
	 * Clears the entire matrix, by setting all cells to false.
	 */
	clear() {
		for (let x = 0; x < this.matrix.length; x += 1) {
			for (let y = 0; y < this.matrix[x].length; y += 1) {
				this.matrix[x][y] = false;
			}
		}

		this.draw();
	}

	/**
	 * Fills the matrix with a random pattern.
	 * The chance that a cell will be alive is at 30%.
	 */
	randomize( e ) {
		for (let x = 0; x < this.matrix.length; x += 1) {
			for (let y = 0; y < this.matrix[x].length; y += 1) {
				this.matrix[x][y] = Math.random() < 0.3;
			}
		}

		this.draw();
		// kick off animation if not already running
		if ( e && ! this.hasStarted ) {
			this.rAF = window.requestAnimationFrame(this.step);
			this.hasStarted = true;
		}
	}

	/**
	 * Toggels the state of one cell at the given coordinates.
	 *
	 * @param cx horizontal coordinates of the given cell
	 * @param cy vertical coordinates of the given cell
	 */
	toggleCell(cx, cy) {
		if (cx >= 0 && cx < this.matrix.length && cy >= 0 && cy < this.matrix[0].length) {
			this.matrix[cx][cy] = !this.matrix[cx][cy];
			this.draw();
		}
	}

	render() {
		return <canvas onClick={this.randomize} ref={this.canvas} />;
	}
}

export default Game;