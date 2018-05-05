document.write("<script language='javascript' src='pixi.min.js'></script>");
var app = new PIXI.Application(800, 600, {backgroundColor: 0x1099bb});
document.body.appendChild(app.view);
var eve = PIXI.Sprite.fromImage('images/cat.png')
eve.x = 300;
eve.y = 200;
eve.width = 100;
eve.height = 100;
app.stage.addChild(eve);
//var basicText = new PIXI.Text('Basic text in pixi');
//basicText.x = 30;
//basicText.y = 90;

//app.stage.addChild(basicText);

var style = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 36,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fill: ['#ffffff', '#00ff99'], // gradient
    stroke: '#4a1850',
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 440
});

var richText = new PIXI.Text('Rhinestone Eyes', style);
richText.x = 230;
richText.y = 140;

richText.interactive = true;
richText.buttonMode = true;
richText
        .on('pointerdown', onButtonDown)
        .on('pointerup', onButtonUp)
        .on('pointerupoutside', onButtonUp)
        .on('pointerover', onButtonOver)
        .on('pointerout', onButtonOut);


app.stage.addChild(richText);
function onButtonDown() {
    this.isdown = true;
    this.texture = textureButtonDown;
    this.alpha = 1;
