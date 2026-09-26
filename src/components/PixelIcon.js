import React from 'react';

// Tiny pixel-art icons drawn from character grids. "#" = filled pixel.
const ICONS = {
  mail: [
    '#############',
    '##.........##',
    '#.#.......#.#',
    '#..#.....#..#',
    '#...#...#...#',
    '#....###....#',
    '#...........#',
    '#...........#',
    '#############',
  ],
  linkedin: [
    '##.........',
    '##.........',
    '...........',
    '##.##.###..',
    '##.####.##.',
    '##.##...##.',
    '##.##...##.',
    '##.##...##.',
    '##.##...##.',
  ],
  resume: [
    '######...',
    '#....##..',
    '#....#.#.',
    '#....####',
    '#.####..#',
    '#.......#',
    '#.#####.#',
    '#.......#',
    '#.####..#',
    '#.......#',
    '#########',
  ],
  home: [
    '.....#.....',
    '....###....',
    '...#####...',
    '..#######..',
    '.#########.',
    '###########',
    '.###...###.',
    '.###...###.',
    '.###...###.',
  ],
  right: ['#....', '##...', '###..', '####.', '#####', '####.', '###..', '##...', '#....'],
  down: ['#########', '.#######.', '..#####..', '...###...', '....#....'],
};

export default function PixelIcon({ name, size = 3, className = '' }) {
  const grid = ICONS[name];
  const h = grid.length;
  const w = grid[0].length;
  const rects = [];
  grid.forEach((row, y) => {
    let x = 0;
    while (x < w) {
      if (row[x] !== '#') { x += 1; continue; }
      const start = x;
      while (x < w && row[x] === '#') x += 1;
      rects.push(<rect key={`${y}-${start}`} x={start} y={y} width={x - start} height={1} />);
    }
  });
  return (
    <svg
      className={`pixel-icon ${className}`}
      width={w * size}
      height={h * size}
      viewBox={`0 0 ${w} ${h}`}
      shapeRendering="crispEdges"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      {rects}
    </svg>
  );
}
