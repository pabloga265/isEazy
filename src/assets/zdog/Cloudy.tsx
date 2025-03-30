import { useEffect } from "react";
import Zdog from 'zdog';

const Cloudy = () => {
  useEffect(() => {

    const illoElem = document.querySelector(".illo");
    if (!illoElem) return;
    const illoSize = 360;
    const minWindowSize = Math.min(window.innerWidth - 20, window.innerHeight - 60);
    const zoom = Math.min(3, Math.floor(minWindowSize / (illoSize / 4)) / 4);
    illoElem.setAttribute("width", String(illoSize * zoom));
    illoElem.setAttribute("height", String(illoSize * zoom));

    let isSpinning = false;
    const TAU = Zdog.TAU;

    const illo = new Zdog.Illustration({
      element: illoElem,
      zoom: zoom,
      dragRotate: true,
      onDragStart: function () {
        isSpinning = false;
      },
    });

    // colors
    const midnight = "#313";
    const eggplant = "#525";
    const magenta = "#936";
    const amber = "#D65";
    const gold = "#FA6";
    const white = "#FFF";

    const layerSpace = 56;

    // -- illustration shapes --- //

    // background
    const background = new Zdog.Shape({
      translate: { z: layerSpace * -2 },
      visible: false,
      addTo: illo,
    });

    const bgGroup1 = new Zdog.Group({
      addTo: background,
      translate: { z: -24 },
    });

    const bgStripe = new Zdog.Rect({
      width: 180,
      height: 44,
      addTo: bgGroup1,
      translate: { y: -40 },
      color: magenta,
      stroke: 12,
      fill: true,
    });
    // magenta circle
    const bgCircle = new Zdog.Ellipse({
      diameter: 96,
      addTo: bgGroup1,
      translate: { y: -16 },
      color: magenta,
      stroke: 24,
      fill: true,
    });

    const bgGroup2 = new Zdog.Group({
      addTo: background,
    });

    // amber stripe
    bgStripe.copy({
      addTo: bgGroup2,
      translate: { y: -8 },
      color: amber,
    });
    // amber circle
    bgCircle.copy({
      addTo: bgGroup2,
      diameter: 64,
      translate: { y: -16 },
      color: amber,
    });

    const bgGroup3 = new Zdog.Group({
      addTo: background,
      translate: { z: 24 },
    });

    // gold bg stripe
    bgStripe.copy({
      addTo: bgGroup3,
      height: 60,
      translate: { y: 32 },
      color: gold,
    });
    // gold circle
    bgCircle.copy({
      addTo: bgGroup3,
      width: 32,
      height: 32,
      translate: { y: -16 },
      color: gold,
    });

    // sun
    new Zdog.Shape({
      addTo: background,
      translate: { y: -16, z: 48 },
      stroke: 24,
      color: white,
    });

    // ----- midBackground ----- //

    const midBackground = new Zdog.Group({
      addTo: illo,
      translate: { z: layerSpace * -1 },
    });

    const midBGDot = new Zdog.Shape({
      addTo: midBackground,
      translate: { x: -36, y: 18 },
      stroke: 24,
      color: amber,
    });
    midBGDot.copy({
      translate: { x: -24, y: 24 },
    });
    midBGDot.copy({
      translate: { x: -6, y: 26 },
    });
    midBGDot.copy({
      translate: { x: 12, y: 16 },
    });
    midBGDot.copy({
      translate: { x: 28, y: 12 },
    });
    midBGDot.copy({
      translate: { x: 48, y: 20 },
    });

    const midBGBigDot = midBGDot.copy({
      stroke: 48,
      translate: { x: -52, y: 40 },
    });
    midBGBigDot.copy({
      translate: { x: 20, y: 40 },
    });
    midBGBigDot.copy({
      stroke: 40,
      translate: { x: 56, y: 40 },
    });
    midBGBigDot.copy({
      stroke: 40,
      translate: { x: -16, y: 48 },
    });

    // ----- midground ----- //

    const midground = new Zdog.Anchor({
      addTo: illo,
    });

    const midgroundGroundA = new Zdog.Shape({
      path: [
        { x: -96, y: 10 },
        { x: -86, y: 10 },
        {
          arc: [
            { x: -60, y: 42 },
            { x: -26, y: 42 },
          ],
        },
        { x: -26, y: 74 },
        { x: -96, y: 74 },
      ],
      addTo: midground,
      color: magenta,
      stroke: 48,
      fill: true,
    });
    midgroundGroundA.copy({
      path: [
        { x: -26, y: 42 },
        {
          arc: [
            { x: -8, y: 74 },
            { x: 36, y: 74 },
          ],
        },
        { x: 96, y: 74 },
        { x: -26, y: 74 },
      ],
    });

    function tree(groupOptions: any, options: any) {
      options = Zdog.extend(options, groupOptions);
      const treeW = options.width / 2;
      const treeH = options.height / 2;

      const pointA = { x: 0, y: -treeH };
      const pointB = { x: treeW, y: treeH };
      const pointC = { x: -treeW, y: treeH };

      const treeOptions = Zdog.extend(
        {
          path: [
            pointA,
            { bezier: [pointA, { x: treeW, y: (treeH * 1) / 3 }, pointB] },
            pointC,
            { bezier: [{ x: -treeW, y: (treeH * 1) / 3 }, pointA, pointA] },
          ],
          fill: true,
        },
        options
      );

      const treePlane = new Zdog.Shape(treeOptions);
      treePlane.copy({
        rotate: { y: TAU / 4 },
      });
    }

    const midgroundTree = {
      addTo: midground,
      color: magenta,
      stroke: 2,
    };

    tree(midgroundTree, {
      width: 10,
      height: 24,
      translate: { x: -86, y: -14, z: -8 },
    });

    tree(midgroundTree, {
      width: 16,
      height: 36,
      translate: { x: -70, y: -12, z: 14 },
    });

    tree(midgroundTree, {
      width: 10,
      height: 24,
      translate: { x: -60, y: -4 },
    });

    tree(midgroundTree, {
      width: 10,
      height: 24,
      translate: { x: -26, y: 12, z: -8 },
    });

    tree(midgroundTree, {
      width: 10,
      height: 24,
      translate: { x: -18, y: 18, z: 2 },
    });

    const lonelyTranslate = { x: 32, y: 24 };

    tree(midgroundTree, {
      width: 16,
      height: 36,
      translate: lonelyTranslate,
    });
    // lonely tree stump
    new Zdog.Shape({
      path: [{ y: 18 }, { y: 28 }],
      addTo: midground,
      translate: lonelyTranslate,
      color: magenta,
      stroke: 4,
    });

    tree(midgroundTree, {
      width: 10,
      height: 24,
      translate: { x: 64, y: 40, z: 6 },
    });
    tree(midgroundTree, {
      width: 10,
      height: 24,
      translate: { x: 72, y: 44, z: -2 },
    });

    // ----- midForeground ----- //

    const midForeground = new Zdog.Anchor({
      addTo: illo,
      translate: { z: layerSpace },
    });

    // midForeground ground part A
    const midForegroundGround = new Zdog.Shape({
      path: [
        { x: 96, y: 26 },
        { x: 72, y: 26 },
        {
          arc: [
            { x: 56, y: 50 },
            { x: 18, y: 50 },
          ],
        },
        { x: 18, y: 90 },
        { x: 96, y: 90 },
      ],
      addTo: midForeground,
      color: eggplant,
      stroke: 48,
      fill: true,
    });
    midForegroundGround.copy({
      path: [
        { x: 18, y: 50 },
        {
          arc: [
            { x: -16, y: 90 },
            { x: -48, y: 72 },
          ],
        },
        { x: -64, y: 56 },
        { x: -96, y: 48 },
        { x: -96, y: 90 },
        { x: 18, y: 90 },
      ],
    });

    const midForeBall = new Zdog.Shape({
      addTo: midForeground,
      translate: { x: -92, y: 18 },
      stroke: 20,
      color: eggplant,
    });
    midForeBall.copy({
      translate: { x: -104, y: 28 },
    });
    midForeBall.copy({
      translate: { x: -84, y: 28 },
      stroke: 24,
    });
    midForeBall.copy({
      translate: { x: -74, y: 20 },
    });
    midForeBall.copy({
      translate: { x: -60, y: 28 },
    });
    midForeBall.copy({
      translate: { x: -50, y: 36 },
    });
    midForeBall.copy({
      translate: { x: -44, y: 46 },
    });

    const midForeTree = {
      addTo: midForeground,
      color: eggplant,
      stroke: 2,
    };

    tree(midForeTree, {
      width: 10,
      height: 24,
      translate: { x: -12, y: 42 },
    });
    tree(midForeTree, {
      width: 10,
      height: 24,
      translate: { x: 10, y: 22, z: 2 },
    });
    tree(midForeTree, {
      width: 16,
      height: 36,
      translate: { x: 22, y: 18, z: -6 },
    });

    tree(midForeTree, {
      width: 16,
      height: 36,
      translate: { x: 76, y: -6, z: 12 },
    });
    tree(midForeTree, {
      width: 10,
      height: 24,
      translate: { x: 86, y: -4, z: -10 },
    });

    // ----- foregroundA ----- //

    const foregroundA = new Zdog.Shape({
      path: [
        { x: -96, y: 52 },
        { x: -84, y: 52 },
        {
          arc: [
            { x: -72, y: 72 },
            { x: -44, y: 72 },
          ],
        },
        {
          arc: [
            { x: -32, y: 90 },
            { x: 0, y: 90 },
          ],
        },
        { x: -96, y: 90 },
      ],
      addTo: illo,
      translate: { z: layerSpace * 2 },
      color: midnight,
      stroke: 48,
      fill: true,
    });

    const foregroundTree = {
      color: midnight,
      stroke: 2,
    };

    tree(foregroundTree, {
      addTo: foregroundA,
      width: 18,
      height: 44,
      translate: { x: -80, y: 18 },
    });

    const foreTree1Translate = { x: -44, y: 14 };
    tree(foregroundTree, {
      addTo: foregroundA,
      width: 18,
      height: 44,
      translate: { x: -44, y: 14 },
    });
    // trunk
    new Zdog.Shape({
      path: [{ y: 22 }, { y: 38 }],
      addTo: foregroundA,
      translate: foreTree1Translate,
      stroke: 6,
      color: midnight,
    });

    tree(foregroundTree, {
      addTo: foregroundA,
      width: 16,
      height: 36,
      translate: { x: -2, y: 64 },
    });

    const grassBlade = new Zdog.Shape({
      path: [
        // semi-circle outside on left
        { x: 0, y: 1 },
        {
          arc: [
            { x: -1, y: 1 },
            { x: -1, y: 0 },
          ],
        },
        {
          arc: [
            { x: -1, y: -1 },
            { x: 0, y: -1 },
          ],
        },
        // shallow semi-circle back
        {
          arc: [
            { x: -0.5, y: -0.7 },
            { x: -0.5, y: 0 },
          ],
        },
        {
          arc: [
            { x: -0.5, y: 0.7 },
            { x: 0, y: 1 },
          ],
        },
      ],
      addTo: foregroundA,
      translate: { x: -20, y: 56 },
      scale: 8,
      rotate: { z: 0.6 },
      color: midnight,
      stroke: 1,
      fill: true,
      closed: false,
    });
    grassBlade.copy({
      translate: { x: -33, y: 50 },
      rotate: { z: TAU / 2 + 0.2 },
    });

    grassBlade.copy({
      translate: { x: -62, y: 40 },
      rotate: { z: 0.8 },
      scale: 7,
    });

    grassBlade.copy({
      translate: { x: -64, y: 35 },
      rotate: { z: 0.4 },
      scale: 7,
    });

    // ----- foregroundB ----- //

    const foregroundB = new Zdog.Shape({
      path: [
        { x: 96, y: 52 },
        {
          arc: [
            { x: 80, y: 72 },
            { x: 56, y: 72 },
          ],
        },
        {
          arc: [
            { x: 40, y: 90 },
            { x: 8, y: 90 },
          ],
        },
        { x: 0, y: 90 },
        { x: 96, y: 90 },
      ],
      addTo: illo,
      translate: { z: layerSpace * 2 },
      color: midnight,
      stroke: 48,
      fill: true,
    });

    tree(foregroundTree, {
      addTo: foregroundB,
      width: 16,
      height: 36,
      translate: { x: 10, y: 54 },
    });

    // big tree
    const bigTreeTranslate = { x: 58, y: 2 };
    tree(foregroundTree, {
      addTo: foregroundB,
      width: 20,
      height: 64,
      translate: bigTreeTranslate,
    });
    // big tree trunk
    new Zdog.Shape({
      path: [{ y: 32 }, { y: 48 }],
      addTo: foregroundB,
      translate: bigTreeTranslate,
      stroke: 6,
      color: midnight,
    });

    tree(foregroundTree, {
      addTo: foregroundB,
      width: 16,
      height: 36,
      translate: { x: 86, y: 26 },
    });

    grassBlade.copy({
      addTo: foregroundB,
      scale: 12,
      translate: { x: 46, y: 54 },
      rotate: { z: 0 },
    });
    grassBlade.copy({
      addTo: foregroundB,
      scale: 10,
      translate: { x: 28, y: 58 },
      rotate: { z: TAU / 2 - 0.4 },
    });

    // ----- clouds ----- //

    const twoCloud = new Zdog.Shape({
      path: [
        { x: -20, y: 0 },
        {
          bezier: [
            { x: -13, y: 0 },
            { x: -12, y: -4 },
            { x: -10, y: -4 },
          ],
        },
        {
          bezier: [
            { x: -8, y: -4 },
            { x: -8, y: -2 },
            { x: -4, y: -2 },
          ],
        },
        {
          bezier: [
            { x: 0, y: -2 },
            { x: 1, y: -6 },
            { x: 4, y: -6 },
          ],
        },
        {
          bezier: [
            { x: 7, y: -6 },
            { x: 6, y: 0 },
            { x: 20, y: 0 },
          ],
        },
      ],
      addTo: illo,
      translate: { x: -84, y: -38, z: layerSpace * -1 },
      rotate: { y: (-TAU * 1) / 16 },
      scale: { x: 1 / Math.cos((TAU * 1) / 16) },
      stroke: 4,
      color: white,
      fill: true,
    });

    twoCloud.copy({
      translate: { x: -38, y: -22, z: layerSpace * -0.5 },
      rotate: { y: (-TAU * 1) / 8 },
      scale: { x: (1 / Math.cos((TAU * 1) / 8)) * -1 },
    });

    // triple cloud
    new Zdog.Shape({
      path: [
        { x: -32, y: 0 },
        { x: -28, y: 0 },
        {
          bezier: [
            { x: -22, y: 0 },
            { x: -20, y: -6 },
            { x: -16, y: -6 },
          ],
        },
        {
          bezier: [
            { x: -12, y: -6 },
            { x: -12, y: -2 },
            { x: -8, y: -2 },
          ],
        },
        {
          bezier: [
            { x: -4, y: -2 },
            { x: -4, y: -6 },
            { x: 0, y: -6 },
          ],
        },
        {
          bezier: [
            { x: 4, y: -6 },
            { x: 4, y: -2 },
            { x: 8, y: -2 },
          ],
        },
        {
          bezier: [
            { x: 12, y: -2 },
            { x: 12, y: -6 },
            { x: 16, y: -6 },
          ],
        },
        {
          bezier: [
            { x: 20, y: -6 },
            { x: 22, y: 0 },
            { x: 28, y: 0 },
          ],
        },
        { x: 32, y: 0 },
      ],
      addTo: illo,
      translate: { x: 72, y: -52, z: layerSpace * -1 },
      rotate: { y: (TAU * 1) / 16 },
      scale: { x: 1 / Math.cos((TAU * -1) / 16) },
      stroke: 4,
      color: white,
      fill: true,
    });

    // ----- bird ----- //

    new Zdog.Shape({
      path: [
        { x: -6, y: -4 },
        { x: -4, y: -4 },
        {
          arc: [
            { x: 0, y: -4 },
            { x: 0, y: 0 },
          ],
        },
        {
          arc: [
            { x: 0, y: -4 },
            { x: 4, y: -4 },
          ],
        },
        { x: 6, y: -4 },
        { move: { z: -2, y: 0 } },
        { z: 3, y: 0 },
      ],
      addTo: illo,
      translate: { x: 18, y: -30, z: layerSpace * -1 },
      stroke: 3,
      color: midnight,
      closed: false,
    });

    // -- animate --- //

    let t = 0;
    const tSpeed = 1 / 240;

    function animate() {
      // update
      if (isSpinning) {
        t += tSpeed;
        const theta = Zdog.easeInOut(t % 1) * TAU;
        const delta = (TAU * -3) / 64;
        illo.rotate.y = Math.sin(theta) * delta;
        illo.rotate.x = (Math.cos(theta) * -0.5 + 0.5) * delta;
      }

      illo.updateRenderGraph();
      requestAnimationFrame(animate);
    }

    animate();
  });

  return (
    <div className="container">
      <canvas className="illo"></canvas>

    </div>
  );
};

export default Cloudy;
