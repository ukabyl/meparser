import React, { useEffect, useRef, useState } from 'react';

interface CanvasProps {
  expression: string
}

export const Canvas = ({ expression }: CanvasProps) => {
  const canvas = useRef<HTMLCanvasElement>(null);

  const size = 300;
  const halfOfSize = size / 2;
  const scale = 10;

  const move = (i: number, expression: string, ctx: CanvasRenderingContext2D) => {
    let x = i;
    let y = eval(expression);
    ctx.lineTo(x * scale + 150, - y * scale + 150);
  }

  const sketchCoordinate = (ctx: CanvasRenderingContext2D) => {
    ctx.moveTo(halfOfSize, size);
    ctx.lineTo(halfOfSize, 0);
    ctx.moveTo(0, halfOfSize);
    ctx.lineTo(size, halfOfSize);
    ctx.stroke();
  }

  const sketchExpression = (expression: string, ctx: CanvasRenderingContext2D) => {
    let x = -halfOfSize;
    let y = eval(expression);
    ctx.moveTo(x * scale + halfOfSize, - y * scale + halfOfSize);

    for (let i = -halfOfSize; i < halfOfSize; i += 0.05) {
      move(i, expression, ctx);
    }
    ctx.stroke();
  }

  useEffect(() => {
    if (canvas && canvas.current) {
      canvas.current.width = size;
      canvas.current.height = size;
      const ctx = canvas.current.getContext("2d");

      if (ctx) {
        sketchCoordinate(ctx);
      }
      if (ctx && expression) {
        sketchExpression(expression, ctx);
      }
    }
  }, [expression, scale])

  return (
    <canvas
      ref={canvas}
    ></canvas>
  )
}