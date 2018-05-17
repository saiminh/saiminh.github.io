(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

//global variables
window.onload = function () {

/*	var theHeight;
	var theWidth;
	var theRatio = window.innerHeight / window.innerWidth;
	if (window.innerHeight < 480){
	    theHeight = window.innerHeight;
	}
	else{
	    theHeight = 480;
	};
	if (window.innerWidth > 480) {
	    theWidth = 480;
	}
	else {
	    theWidth = window.innerWidth;
	}
	;*/
	var theHeight = 480;
	var theWidth = 380;
  	var game = new Phaser.Game(theWidth, theHeight, Phaser.AUTO, 'crappy-turd');

  // Game States
  game.state.add('boot', require('./states/boot'));
  game.state.add('gameover', require('./states/gameover'));
  game.state.add('menu', require('./states/menu'));
  game.state.add('play', require('./states/play'));
  game.state.add('preload', require('./states/preload'));
  game.state.add('tutorial', require('./states/tutorial'));
  

  game.state.start('boot');
};
},{"./states/boot":3,"./states/gameover":4,"./states/menu":5,"./states/play":6,"./states/preload":7,"./states/tutorial":8}],2:[function(require,module,exports){
'use strict';

var Turd = function(game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'turd', frame);

  // initialize your prefab here

  this.anchor.setTo(-0.2, 0.5);       
  
  // Enable physics on the turd
  this.game.physics.enable(this, Phaser.Physics.ARCADE);
  this.regularGravity = 1200;
  this.body.gravity.y = this.regularGravity;
  this.body.height = 32; 
  this.body.width = 32;     
  this.body.offset.x = 16;
  this.body.offset.y = 24;
  //variable to check if the turd is falling
  this.falling = false;      
   //Initially set the supermode and invulnerability to False 
  this.supermode = false;              
  this.invulnerable = false;
  //load animations
  this.animations.add('flap',[0,1,2,3,4,5], 12, true);
  this.flapAni = this.animations.add('flapJump',[6,7,8,9,10,11,12,0], 23, false);
  this.animations.add('plunge',[13,14,15,16,17,18,19,20,29], 13, false);
  this.animations.add('crashDeath', [21,22,23,24,25,26], 20, false);
  this.animations.add('superturd',[30,31,32,33,34,35,36,37,38,39,40,41], 36, true);
  this.animations.add('invulnerableFlap',[0,59,1,59,2,59,3,59,4,59,5,59], 12, true);   
  this.inFlapAni = this.animations.add('invulnerableFlapJump',[6,59,7,59,8,59,9,59,10,59,11,59,12,59,0,59], 23, true);                    
  this.animations.play('flap');    
  
};

Turd.prototype = Object.create(Phaser.Sprite.prototype);
Turd.prototype.constructor = Turd;

Turd.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = Turd;

},{}],3:[function(require,module,exports){

'use strict';

function Boot() {
}

Boot.prototype = {
  preload: function() {
    this.load.image('preloaderEmpty', 'assets/preloader-empty.gif');
    this.load.image('preloaderFull', 'assets/preloader-full.gif');     
  },
  create: function() {
    this.game.input.maxPointers = 1;
    this.game.state.start('preload');
  }
};

module.exports = Boot;

},{}],4:[function(require,module,exports){

'use strict';
function GameOver() {}

GameOver.prototype = {
  preload: function () {

  },
  create: function () {
    var style = { font: '65px Arial', fill: '#ffffff', align: 'center'};
    this.titleText = this.game.add.text(this.game.world.centerX,100, 'Game Over!', style);
    this.titleText.anchor.setTo(0.5, 0.5);

    this.congratsText = this.game.add.text(this.game.world.centerX, 200, 'You Win!', { font: '32px Arial', fill: '#ffffff', align: 'center'});
    this.congratsText.anchor.setTo(0.5, 0.5);

    this.instructionText = this.game.add.text(this.game.world.centerX, 300, 'Click To Play Again', { font: '16px Arial', fill: '#ffffff', align: 'center'});
    this.instructionText.anchor.setTo(0.5, 0.5);
  },
  update: function () {
    if(this.game.input.activePointer.justPressed()) {
      this.game.state.start('play');
    }
  }
};
module.exports = GameOver;

},{}],5:[function(require,module,exports){

'use strict';
var Turd = require('../prefabs/turd');
function Menu() {}

Menu.prototype = {
  preload: function() {

  },
  create: function() {
     // background
      this.background = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'background');
      //this.background.autoScroll(-10, 0);    
       // middle ground
      this.midground = this.game.add.tileSprite(0, (this.game.height - 480), this.game.width, (this.game.height + 480), 'midground');
      //this.midground.autoScroll(-85, 0);
      //add animated ground
      this.ground = this.game.add.tileSprite(0, this.game.height - 30, this.game.width, 64, 'ground');
      //scroll the ground
      this.ground.autoScroll(-20, 0); 
     
      // Add Title graphic
      this.title = this.game.add.sprite(this.game.width/2, this.game.height * 0.075, 'title');      
      var scaledTitleWidth = this.game.width * 0.8;
      var titleRatio = this.title.width/this.title.height;
      var scaledTitleHeight = scaledTitleWidth / titleRatio;
      this.title.width = scaledTitleWidth;
      this.title.height = scaledTitleHeight;
      this.title.anchor.setTo(0.5, 0);

      this.turd = new Turd(this.game, 50,this.game.height/2);
      this.game.add.existing(this.turd);
      this.turd.body.gravity.y = 0;

      // Move the turd up and down a little
      this.game.add.tween(this.turd)
        .to({ y: this.game.height/2 - 10 }, 500, Phaser.Easing.Linear.None, true) 
        .to({ y: this.game.height/2 }, 500, Phaser.Easing.Linear.None) 
        .loop();

      //check for localstorage support and for existing highscore 
      if (this.game.device.localStorage) {             
         if (localStorage.turdHighScore === "NaN"){
            localStorage.turdHighScore = 0;
         }
         else if (!localStorage.turdHighScore){
            localStorage.turdHighScore = 0;
         }
           // Print Highscore
          this.displayHighscore = this.game.add.bitmapText(this.game.width/2, this.game.height/3, 'amatic', 'High Score: ' + localStorage.turdHighScore, 32);
          this.displayHighscore.updateText();
          this.displayHighscore.x = this.game.width * 0.5 - this.displayHighscore.textWidth * 0.5;                  
          
      };
      
      //Creating the button to link to the tutorial
      var tutorialBtn = this.game.add.sprite(this.game.width * 0.5, this.game.height - 100, 'tutorialButton');
      tutorialBtn.anchor.setTo(0.5,0);
      tutorialBtn.width = 179;
      tutorialBtn.height = 64;
      
      tutorialBtn.inputEnabled = true;    
      tutorialBtn.events.onInputDown.add(this.start_tutorial, this);

      var startButton = this.game.add.sprite(this.turd.x + 10, this.turd.y + 100, 'startButton');    
      startButton.anchor.setTo(0, 1);
      startButton.width = 179;
      startButton.height = 64; 

       this.game.add.tween(startButton)
        .to({ y: this.turd.y + 90 }, 500, Phaser.Easing.Linear.None, true) 
        .to({ y: this.turd.y + 100 }, 500, Phaser.Easing.Linear.None) 
        .loop();

  },

  update: function() {
    if(this.game.input.activePointer.justPressed()) {
      this.game.state.start('play');
    }
  },
  start_tutorial: function() {
      
      this.game.state.start('tutorial');
  }
};

module.exports = Menu;

},{"../prefabs/turd":2}],6:[function(require,module,exports){

  'use strict';
  var Turd = require('../prefabs/turd');
  var supermode = false;
  var wet = false;
  var falling = false;

  function Play() {}
  Play.prototype = {
    create: function() {
        
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      this.game.checkWorldBounds = true;
      
      // Storing the Game Speed in a variable for easy access
      this.gameSpeed_regular = -200;
      this.gameSpeed_current = this.gameSpeed_regular;       

      // background
      this.background = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'background');
      this.background.autoScroll(-25, 0);
      // middle ground
      this.midground = this.game.add.tileSprite(0, (this.game.height - 480), this.game.width, (this.game.height + 480), 'midground');
      this.midground.autoScroll(-85, 0);
      //add animated ground
      this.ground = this.game.add.tileSprite(0, this.game.height - 30, this.game.width, 64, 'ground');
      //scroll the ground
      this.ground.autoScroll(-150, 0); 
      //enable physics for ground for turd collision
      this.game.physics.arcade.enableBody(this.ground);
      //offset for physics body
      this.ground.body.offset.y = 35;
      //no gravity for the ground        
      this.ground.body.allowGravity = false;
      
      this.ground.body.immovable = true;

      this.superOverlay = this.game.add.tileSprite(-1 * this.game.width, 0, this.game.width, 10, 'super-overlay');     

       //initiate toiletpaper        
      this.papers = this.game.add.group();
      this.papers.createMultiple(6, 'toipap');
      this.papers.forEach(function(thepaper){
          thepaper.animations.add('paper-laugh', [8,9], 8, true); 
          thepaper.animations.add('paper-burn', [6, 7], 14, true);
          thepaper.animations.add('paper-death', [3,4,5], 14, true);
      });          
      var paper;
      //with toiletpaper physics
      this.game.physics.enable( this.papers, Phaser.Physics.ARCADE);    
      
       // call Turd Prefab
      this.turd = new Turd(this.game, 50, this.game.height/2);
      this.game.add.existing(this.turd);

      //Define the Pepper sprite and add
      this.pepper = this.game.add.sprite(this.game.width, this.game.rnd.integerInRange(0, this.game.height - 120), 'chilliPepper');
      this.pepper.checkWorldBounds = true;
      this.pepper.outOfBoundsKill = true;
      this.pepper.alive = false;
      this.game.physics.enable( this.pepper, Phaser.Physics.ARCADE); 

      //Combo Counter to be displayed above the pepper
      var pepperComboString;
      this.pepper_combo_factor = this.game.add.bitmapText(this.game.width, 0, 'amatic', this.pepperComboString, 25);     

      //Load Particle flameTrailEmitter for transform Effect 
      this.flameTrailEmitter = this.game.add.emitter(0, 0, 100);
      this.flameTrailEmitter.makeParticles('spark', [0,1,2,3]);
      this.flameTrailEmitter.gravity = 200;  

      //crash particles in supermode
      this.flameBurstEmitter = this.game.add.emitter(0, 0, 100);
      this.flameBurstEmitter.makeParticles('spark', [0,1,2,3]);
      this.flameBurstEmitter.gravity = 0;  
    
      //set up TOUCH-TAP and MOUSE-click control
      this.game.input.onDown.add(this.jump, this);         

      //Sound
      this.jump_sound = this.game.add.audio('jump');
      this.stomp_sound = this.game.add.audio('stomp');
      this.die_sound = this.game.add.audio('splash');
      this.super_theme = this.game.add.audio('superTheme');
      this.death_theme = this.game.add.audio('deathTheme')
      this.main_theme = this.game.add.audio('mainTheme');
      this.main_theme.play('', 0, 1, true, false);
      
      //Initial Score and GameOver style
      this.score = 0;
      this.flaps = 0;
      this.hitcount = 0;
      this.hit_score_amount = 0;        
      localStorage.turdNewScore = 0;
      localStorage.turdHighScore;   
            
      this.label_score = this.game.add.bitmapText(20,20, 'amatic', 'Score: ' + this.score, 32);

      this.label_game_over = this.game.add.sprite(this.game.width/2, -150, "tryAgain");
      this.label_game_over.anchor.setTo(0.5,0);
      this.label_game_over.width = 150;
      this.label_game_over.height = 64;

      this.label_backToMain = this.game.add.sprite(this.game.width/2 - 10, this.game.height, "backToMain");
      this.label_backToMain.anchor.setTo(0.5,0);
      this.label_backToMain.width = 110;
      this.label_backToMain.height = 34;

      this.label_hiscore = this.game.add.bitmapText(this.game.width/2, -100, 'amatic', 'High Score: ' + localStorage.turdHighScore, 30);
      this.label_hiscore.updateText();
      this.label_hiscore.x = this.game.width * 0.5 - this.label_hiscore.textWidth * 0.5;

      this.set_game_speed(1);     
      //following var defines the amount of seconds a superturd lasts initially 
      this.superlength = 1;              
    
      this.hit_score_text = this.game.add.bitmapText(-100, -100, 'amatic', '1', 30);
      this.hit_score_text_super = this.game.add.bitmapText(-200, -200, 'amaticBurn', '1', 60);    
      
      //Game starts with a jump
      this.jump();

    },
    update: function() {

        this.game.physics.arcade.collide(this.turd, this.papers, this.hit_papers, null, this);
        this.game.physics.arcade.collide(this.turd, this.ground, this.hit_ground, null, this);   
        this.game.physics.arcade.collide(this.turd, this.pepper, this.eat_pepper, null, this);  

        if (this.turd.alive){                                   

          if (this.turd.angle < 20 && !this.turd.wet)
            this.turd.angle += 1;

          if (this.turd.body.x < 50){
            this.turd.x++;
          };

          if (this.turd.supermode){
               //  Position the flameTrailEmitter
                  this.flameTrailEmitter.x = this.turd.body.x - 15 ;
                  this.flameTrailEmitter.y = this.turd.body.y ;
          };    
        }
            
    },
    
    set_game_speed: function (multiplier){
        this.gameSpeed_current = this.gameSpeed_regular * multiplier;
        this.background.autoScroll(this.gameSpeed_current / 10, 0);
        this.midground.autoScroll(this.gameSpeed_current / 2, 0);
        this.ground.autoScroll(this.gameSpeed_current, 0);       
        this.papers.forEachAlive(function(eachPaper){
                eachPaper.body.velocity.x = this.gameSpeed_current;                
        }, this);        
       
        if (this.gameSpeed_current == 0 ){
            this.game.time.events.remove(this.timer);
        }
        else{
            this.game.time.events.remove(this.timer);
            this.timer = this.game.time.events.loop(1000 / multiplier, this.place_paper, this);                        
        };               
    },

    jump: function() {
        
        if (this.turd.alive == false){
            return;
        };
        var turd_y_velocity = this.turd.body.velocity.y;        
        if (turd_y_velocity <= -500){
            this.turd.body.velocity.y = turd_y_velocity;
        }
        else if (turd_y_velocity >= 100){
            this.turd.body.velocity.y = -300;
        }
        else{
            this.turd.body.velocity.y -= 400;
        };

        var turdTiltAnimation = this.game.add.tween(this.turd);
        turdTiltAnimation.to({angle: -20}, 100);
        turdTiltAnimation.start();
        
        //in supermode there's no flap animation
        //increase flapcounter IF no supermode        
        if (!this.turd.supermode && !this.turd.invulnerable){            
            this.turd.animations.stop('flapJump');
            this.turd.animations.play('flapJump').onComplete.add(this.jumpend, this);   
            this.flaps++;
        }
        // No supermode but still invulnerable = blinking animation AND NO FLAPCOUNT INCREASE
        else if(!this.turd.supermode && this.turd.invulnerable){
            this.turd.animations.stop('invulnerableFlapJump');
            this.turd.animations.play('invulnerableFlapJump').onComplete.add(this.jumpend, this);   
            this.flaps++;
        };                 
        
        this.jump_sound.play();
        
        if (this.flaps > 1){
            this.hitcount = 0;           
            this.hit_score_amount = 0;
            this.update_combo_factor();            
        };                         
    },

    jumpend: function() {
        if (this.turd.alive == false)
            return;              
        if (!this.turd.supermode && !this.turd.invulnerable){
            this.turd.animations.play('flap');
        }
        else if(!this.turd.supermode && this.turd.invulnerable){
            this.turd.animations.play('invulnerableFlap');
        };        
    },

    hit_papers: function(_turd, _paper) {

        // If turd is dead, do nothing
        if (this.turd.alive == false)
            return;     

        // If turd is in supermode     
        if (_turd.supermode){
            
            this.turd.body.velocity.x = 0;
            this.stomp_sound.play();  
          
            this.flameBurstEmitter.x = _paper.body.x + 10;
            this.flameBurstEmitter.y = _paper.body.y + 35;
            this.flameBurstEmitter.setXSpeed(200, 650);
            this.flameBurstEmitter.setYSpeed(-100, 400);
            this.flameBurstEmitter.setScale(2, 0, 2, 0, 1500);            
          // this.flameBurstEmitter.setAlpha(1, 0, 1500);
            
            //  The first parameter sets the effect to "explode" which means all particles are emitted at once
            //  The second gives each particle a 2000ms lifespan
            //  The third is ignored when using burst/explode mode
            //  The final parameter (10) is how many particles will be emitted in this single burst        
            this.flameBurstEmitter.start(true, 1500, null, 10);                  

            _paper.alive = false;          
            _paper.body.gravity.y = 1000;
            _paper.body.velocity.x += 500;
            _paper.burning = true;
            _paper.animations.play('paper-burn');     
            _paper.body.checkCollision.up = false;
            _paper.body.checkCollision.down = false;
            _paper.body.checkCollision.right = false;
            _paper.body.checkCollision.left = false;          
           
           //Super Score add to total score
            if (this.hitcount == 0){
                this.hit_score_amount = 1
            }
            else{                
                //The flaming score should be the current score, not the next bounce score, 
                //therefore we have to substract 10 from the score amount...
                this.hit_score_amount =  (this.hitcount * 10) - 10;
            };
            this.add_score(this.hit_score_amount);
            // this.hitcount++;

            //Super Score Animation            
            this.hit_score_text_super.text = this.hit_score_amount;
            this.hit_score_text_super.x = this.turd.body.x;
            this.hit_score_text_super.y = this.turd.body.y;         
            this.hit_score_text_super.alpha = 1; 

            var score_animation_super = this.game.add.tween(this.hit_score_text_super);
            var score_scale_super = this.game.add.tween(this.hit_score_text_super).to({alpha: 0}, 500);
            //if another tween is running, destroy it first before starting the new one
            if(score_animation_super.isRunning){
                 this.hit_score_text_super.destroy();
            };
            //Super Score Animation Tween
            score_animation_super.to( {y: this.turd.body.y - 40, x: this.turd.body.x - 50}, 500);                               
            score_animation_super.onComplete.add(function(){
                this.hit_score_text_super.x = -200;
                this.hit_score_text_super.y = -200;
            }, this);     
            score_animation_super.start(); 
            score_scale_super.start();     
        }

        //If turd is in normal mode
        else{
            // Bounce on top: HIT!
            if (_turd.body.touching.down){                                          
                _turd.body.velocity.y = -400;
                
                _turd.body.velocity.x = 0;
                this.stomp_sound.play();

                _paper.body.gravity.y = 1000;
                _paper.body.velocity.y = -100;                          
                _paper.animations.play('paper-death');   

                //first combo hit (so the second bounce) and more
                if (this.hitcount >= 1 && this.flaps < 2){                
                    this.hit_score_amount = this.hitcount * 10;   
                    this.update_combo_factor();                     
                }              
                //no combo hit
                else{
                    this.hit_score_amount = 1;                                 
                };

                if (this.hitcount > 0 && this.flaps < 2){                                        
                    this.add_pepper();                    
                };
                //show total score on top
                this.add_score(this.hit_score_amount);
                //add 1 hitcound
                this.hitcount++;
                //reset flaps
                this.flaps = 0; 
                // visual feedback with scored points       

                this.hit_score_text.text = this.hit_score_amount;
                this.hit_score_text.updateText();
                this.hit_score_text.x = this.turd.body.x;
                this.hit_score_text.y = this.turd.body.y;                
                var score_animation = this.game.add.tween(this.hit_score_text);
               
                score_animation.to( {y: this.turd.body.y - 40, x: this.turd.body.x - 50}, 500);   
                if (score_animation.isRunning){
                     this.hit_score_text.x = -200;
                };         
                score_animation.start();        

                score_animation.onComplete.add(function(){
                    this.hit_score_text.x = -200;
                }, this);     
            }            
            // Hit anywhere else in normal mode: DEATH!!!!!
            else{
                _turd.alive = false;                                                
                //_turd.body.velocity.y = -800;
                _turd.body.velocity.y = 0;
                this.turd.falling = true;
                _turd.animations.stop('flapJump');
                this.turd.animations.play('crashDeath');                
                this.jump_sound.stop();
                this.die_sound.play();  
                this.gameover();
            }                     
        }
        
    },

    superturd_transform: function(length_of_super){
        if (!this.turd.alive){
            return
        };     
       // this.turd.body.immovable = true;
        this.turd.supermode = true;
        this.turd.body.gravity.y = 800;
        this.turd.animations.play('superturd');    
        this.turd.angle = -20;
       
        // Initiate a burst of flames 
        this.flameBurstEmitter.x = this.turd.body.x + 10;
        this.flameBurstEmitter.y = this.turd.body.y + 15;
        this.flameBurstEmitter.setXSpeed(-10, 200);
        this.flameBurstEmitter.setYSpeed(-450, 0);               
        this.flameBurstEmitter.setScale(2, 0, 2, 0, 1500);         
        //  The first parameter sets the effect to "explode" which means all particles are emitted at once
        //  The second gives each particle a 1500ms lifespan
        //  The third is ignored when using burst/explode mode
        //  The final parameter (10) is how many particles will be emitted in this single burst        
        this.flameBurstEmitter.start(true, 1500, null, 10); 
       

       //Initiate the trail of flames
        this.flameTrailEmitter.setXSpeed(-250, -150);
        this.flameTrailEmitter.setYSpeed(-300, 300);
        this.flameTrailEmitter.setScale(1, 0, 1, 0, 500);
        this.flameTrailEmitter.setRotation(0,100);            
        this.flameTrailEmitter.start(false, 1000, 10);       

        // place and display the super meter to visually indicate how long super mode lasts
        this.superOverlay.x = 0;         
        this.superOverlayTimeAni = this.game.add.tween(this.superOverlay);
        this.superOverlayTimeAni.to({x: -1 * this.game.width}, length_of_super * 1000);
        this.superOverlayTimeAni.start();
        if (length_of_super <= 3){
          this.set_game_speed(3); 
        }
        else if (length_of_super > 3 && length_of_super <= 6){
          this.set_game_speed(4);
        }
        else if (length_of_super > 6 && length_of_super <= 10){
          this.set_game_speed(5);
        }
        else{
          this.set_game_speed(6);
        };
        this.transformTimer = this.time.events.add(Phaser.Timer.SECOND * length_of_super, this.regularturd_transform, this);   

        // Stop theme song and play super song
        this.main_theme.mute = true;
        this.super_theme.play('', 1.5, 1, true, true);
    },
    regularturd_transform: function() {
        if (!this.turd.alive){
            return
        };
        this.turd.invulnerable = true;
        this.turd.body.gravity.y = this.turd.regularGravity;
        this.turd.body.checkCollision.right = false;
        this.turd.body.checkCollision.top = false;

        this.invulnerableTimer = this.time.events.add(Phaser.Timer.SECOND * 1, 
            function(){
                this.turd.invulnerable = false;
                this.turd.body.checkCollision.right = true;
                this.turd.body.checkCollision.top = true;
                this.turd.animations.play('flap');
            }
        , this); 
        this.turd.supermode = false;     
        this.turd.body.immovable = false;     
        this.flameTrailEmitter.kill();
        this.flameBurstEmitter.kill();
        this.killParticleTimer = this.time.events.add(Phaser.Timer.SECOND * 0.5,
          function(){
            this.flameTrailEmitter.forEachAlive(function(sparkling){
              sparkling.kill();
            }, this);
            this.flameBurstEmitter.forEachAlive(function(sparkling){
              sparkling.kill();
            }, this);
          }
        , this);        
        
        //this.turd.body.immovable = false;                                   
        this.turd.animations.play('invulnerableFlap');     
        this.set_game_speed(1);

        // Stop theme song and play super song
        this.super_theme.stop();
        this.main_theme.mute = false;
    },

    hit_ground: function() {
        
        if(this.turd.wet == true){
           return
        }
        else{
            if(this.turd.supermode){
                this.regularturd_transform();
            };
            if (this.turd.alive){
               this.gameover();
            }
            this.turd.alive = false;   
            this.turd.wet = true;  
            this.turd.angle = 0;
            this.turd.body.velocity.y = 200;        
            this.turd.body.velocity.x = 0;
            this.turd.animations.play('plunge');
            this.jump_sound.stop();
            this.die_sound.play();           
            this.ground.autoScroll(0, 0); 
            this.midground.autoScroll(0, 0);                        
        }  
    },

    add_one_paper: function(x, y){            
        this.paper = this.papers.getFirstExists(false);
        this.paper.reset(x, y);
      this.paper.body.velocity.x = this.game.rnd.integerInRange(this.gameSpeed_current + 50 , this.gameSpeed_current -50);  
        this.paper.body.width = 81 ;
        this.paper.body.height = 84;
        this.paper.body.offset.x = 24;   
        this.paper.body.offset.y = 36;  
        this.paper.body.gravity.y = 0;    
        this.paper.checkWorldBounds = true;
      this.paper.outOfBoundsKill = true;     
        this.paper.animations.add('wrath', [0,1,2,2,2], 13, true);
        this.paper.animations.play('wrath');   
        this.paper.body.checkCollision.up = true;
        this.paper.body.checkCollision.down = true;
        this.paper.body.checkCollision.right = true;
        this.paper.body.checkCollision.left = true;
        this.paper.burning = false;
    },

    add_pepper: function(){
        if (!this.pepper.alive){
            this.pepper.alive = true;
            this.update_combo_factor();
            this.pepper.reset(320, this.game.rnd.integerInRange(100, 352));
            this.pepper_combo_factor.x = this.pepper.body.x + 10;
            this.pepper_combo_factor.y = this.pepper.body.y - 30;

            this.pepper.body.velocity.x = -150;  
            this.pepper.alpha = 0;

           var pepperTween = this.game.add.tween(this.pepper);
           pepperTween.to({alpha: 1}, 300);
           pepperTween.start();          

           this.pepper_combo_factorMoveTween = this.game.add.tween(this.pepper_combo_factor);
           this.pepper_combo_factorMoveTween.to({x: -40}, 2450);
           this.pepper_combo_factorMoveTween.start();
        }
        else{
            return
        };                
    },

    update_combo_factor: function(){
        if (this.hitcount == 0){
            this.pepperComboString = "1 SEC";
        }       
        else{
        this.pepperComboString = (this.hitcount) + " SEC";
        };              
        this.pepper_combo_factor.text = this.pepperComboString;
    },

    eat_pepper: function() {
        this.pepper.kill();        
        this.pepper_combo_factorMoveTween.stop();
        this.pepper_combo_factor.x = this.game.width;
        if (this.hitcount == 0 || this.hitcount == 1){
             this.superturd_transform(1);
        }        
        else{
            this.superturd_transform(this.hitcount - 1);
        };  
    },

    place_paper: function() {     
        this.add_one_paper(this.game.width, this.game.rnd.integerInRange(0, this.game.height - 120));     
    },
   
    add_score: function(count) {
        this.score = this.score + count;       
        this.label_score.setText("Score: " + this.score);

    },

    gameover: function() {       

        if (this.invulnerableTimer){
             this.game.time.events.remove(this.invulnerableTimer);
        };
        if (this.transformTimer){
            this.game.time.events.remove(this.transformTimer);
        };
        this.game.time.events.remove(this.timer);
        this.set_game_speed(0); 

        this.papers.forEachAlive(function(eachPaper){            
            eachPaper.body.velocity.x = -50;
            eachPaper.body.velocity.y = 0; 
            eachPaper.body.checkCollision.up = false;
            eachPaper.body.checkCollision.down = false;
            eachPaper.body.checkCollision.left = false;
            eachPaper.body.checkCollision.right = false;    
            eachPaper.animations.play('paper-laugh');      
        });

        //check for localstorage support and for existing highscore 
        if (this.game.device.localStorage) {     
        localStorage.turdNewScore = (+ this.score);
            if (localStorage.turdHighScore) {
                if (parseInt(localStorage.turdNewScore) > parseInt(localStorage.turdHighScore)) {
                    localStorage.turdHighScore = parseInt(localStorage.turdNewScore);
                    this.label_hiscore.destroy();
                    this.label_hiscore = this.game.add.bitmapText(this.game.width/2, -100, 'amaticBurn', 'High Score: ' + localStorage.turdHighScore, 40);
                    this.label_hiscore.updateText();
                    this.label_hiscore.x = this.game.width * 0.5 - this.label_hiscore.textWidth * 0.5;
                                                       
                };
                var hiscore_animation = this.game.add.tween(this.label_hiscore);
                hiscore_animation.to( {y: (this.game.height / 2) - 90 }, 350);
                hiscore_animation.start();  
            };            
        };

        this.game.add.tween(this.label_game_over)
          .to( {y: (this.game.height / 2) - 20 }, 250)
          .start();

        this.game.add.tween(this.label_backToMain)
          .to( {y: this.game.height - 80}, 250)
          .start();

    /*    var link_to_tutorial_animation = this.game.add.tween(this.link_to_tutorial);
        link_to_tutorial_animation.to( {y: (this.game.height - 170)}, 250);
        link_to_tutorial_animation.start();*/
                  
        this.label_game_over.inputEnabled = true;    
        this.label_game_over.events.onInputDown.add(this.restart_game, this);

        this.label_backToMain.inputEnabled = true;    
        this.label_backToMain.events.onInputDown.add(function(){ 
          this.game.state.start('menu') 
        }, this);

        this.main_theme.stop();
        this.death_theme.play('', 2.25, 1, false, false);

        this.game.add.tween(this.midground).to( {y: (this.game.height)}, 350).start();
        this.game.add.tween(this.background).to( {alpha: 0.6}, 650).start();

    },

    restart_game: function() {

        //destroy turd
        if (this.turd) {
            this.turd.destroy();
            this.turd = null;
        };
        //destroy papers
        if(this.papers) {
            this.papers.destroy();
            this.papers = null;
        };
        //destroy pepper
        if(this.pepper) {
            this.pepper.destroy();
            this.pepper = null;
        };
        this.pepperComboString = null;
        this.length_of_super = null;
        //destroy emitters
        if(this.flameTrailEmitter) {
            this.flameTrailEmitter.destroy();
            this.flameTrailEmitter = null;
        };
        if(this.flameBurstEmitter) {
            this.flameBurstEmitter.destroy();
            this.flameBurstEmitter = null;
        };
        if(this.label_score) {
            this.label_score.destroy();
            this.label_score = null;
        };
        if(this.label_game_over) {
            this.label_game_over.destroy();
            this.label_game_over = null;
        };

    /*    this.tutorial_link.destroy();
        this.link_to_tutorial.destroy();*/
        
        if(this.hit_score_text) {
           this.hit_score_text.destroy();
           this.hit_score_text = null;
        }
        if(this.hit_score_text_super) {
          this.hit_score_text_super.destroy();
          this.hit_score_text_super = null;
        }
        if(this.label_hiscore) {
          this.label_hiscore.destroy();
          this.label_hiscore = null;
        }
        if(this.background) {
            this.background.destroy();
            this.background = null;
        };
        if(this.midground) {
            this.midground.destroy();
            this.midground = null;
        };
        if(this.ground) {
            this.ground.destroy();
            this.ground = null;
        };
        if (this.superOverlay) {
            this.superOverlay.destroy();
            this.superOverlay = null;
        };
        //Sound
         if(this.jump_sound) {
            this.jump_sound.stop();
            this.jump_sound = null;
        };
        if(this.stomp_sound) {
            this.stomp_sound.stop();
            this.stomp_sound = null;
        };
        if(this.die_sound) {
            this.die_sound.stop();
            this.die_sound = null;
        };
        if(this.main_theme) {
            this.main_theme.stop();
            this.main_theme = null;
        };
        if(this.super_theme) {
            this.super_theme.stop();
            this.super_theme = null;
        };
        if(this.death_theme) {
            this.death_theme.stop();
            this.death_theme = null;
        };
        this.up_key = null;
        this.score = null;
        this.flaps = null;
        this.hitcount = null;
        this.hit_score_amount = null;

        this.game.time.events.remove(this.timer);
        this.game.state.start('play');
    }   
  }  
  module.exports = Play;
},{"../prefabs/turd":2}],7:[function(require,module,exports){

'use strict';
function Preload() {
  this.asset = null;
  this.assetBg = null
  this.ready = false;
  this.loadingLabel = null;
}

Preload.prototype = {
  preload: function() {
    
    this.assetBg = this.add.sprite(0,this.game.height/2, 'preloaderEmpty');
    this.assetBg.anchor.setTo(0, 0.5);
    this.assetBg.width = this.game.width;
    this.assetBg.height = 28 * (this.game.width * 0.003125);
    this.asset = this.add.sprite(0,this.game.height/2, 'preloaderFull');    
    this.asset.anchor.setTo(0, 0.5);
    this.asset.width = this.assetBg.width;
    this.asset.height = this.assetBg.height;
    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.load.setPreloadSprite(this.asset);    

    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.scale.setScreenSize(true);
    this.game.stage.backgroundColor = '#8d798f';              
    this.game.load.image('ground', 'assets/background-poo-floor.png');
    this.game.load.image('background', 'assets/bg-image-1280x480.png');
    this.game.load.image('midground', 'assets/midg-image-1280x480.png');
    this.game.load.image('title', 'assets/title.png');
    this.game.load.image('chilliPepper', 'assets/chilli-pepper.png');    
    this.game.load.image('super-overlay', 'assets/super-overlay.png');
    this.game.load.image('instructions', 'assets/instructions-01.png');  
    this.game.load.image('tryAgain', 'assets/tryagain-btn.png');
    this.game.load.image('backToMain', 'assets/backtomain.png');
    this.game.load.image('startButton', 'assets/startbutton.png');
    this.game.load.image('tutorialButton', 'assets/tutorial-btn.png');
    this.game.load.image('tutorialArrowUp', 'assets/tutorial-01-arrowUp.png');
    this.game.load.image('tutorialFinger', 'assets/tutorial-01-finger.png');
    this.game.load.image('tutorialText1', 'assets/tutorial-text01.png');
    this.game.load.image('tutorialText2', 'assets/tutorial-text02.png');
    this.game.load.image('tutorialText3', 'assets/tutorial-text03.png');
    this.game.load.image('tutorialText4', 'assets/tutorial-text04.png');

    this.game.load.bitmapFont('amatic', 'assets/bmpfonts/Amatic.png', 'assets/bmpfonts/AmaticWhite.fnt');    
    this.game.load.bitmapFont('amaticBurn', 'assets/bmpfonts/AmaticBurn.png', 'assets/bmpfonts/AmaticBurn.fnt');    

    if (this.game.device.canPlayAudio('ogg')){
      this.game.load.audio('mainTheme', 'assets/uke-theme.ogg');      
      this.game.load.audio('superTheme', 'assets/synth-theme.ogg');
      this.game.load.audio('deathTheme', 'assets/death-theme.ogg');
      console.log('I can play ogg');
    }
   /* else{
      this.game.load.audio('mainTheme', 'assets/uke-theme.mp3');      
      this.game.load.audio('superTheme', 'assets/synth-theme.mp3');
      this.game.load.audio('deathTheme', 'assets/death-theme.mp3');
    }*/

    ;
    if (this.game.device.canPlayAudio('wav')){
      this.game.load.audio('jump', 'assets/flap.wav');
      this.game.load.audio('stomp', 'assets/stomp.wav');
      this.game.load.audio('splash', 'assets/water-splash.wav');      
    };
    this.game.load.spritesheet('spark', 'assets/little-flame-animated.png', 30, 30, 4);
    this.game.load.spritesheet('toipap', 'assets/toiletroll-animation-128.png', 128, 128, 10);
    this.game.load.spritesheet('turd', 'assets/turd-animation-64-allsheet.png', 64, 64, 60);
    
    if (this.game.device.localStorage && !localStorage.turdHighScore){
      localStorage.turdHighScore = 0;
    }    
  },
  create: function() {
    this.asset.cropEnabled = false;        
  },
  update: function() {

    if(!!this.ready) {
      this.game.state.start('menu');
    };    

  },
  onLoadComplete: function() {
    this.ready = true;
  }
};

module.exports = Preload;

},{}],8:[function(require,module,exports){
'use strict';
var Turd = require('../prefabs/turd');

  function Tutorial() {}
  Tutorial.prototype = {
    preload: function() {
      // Override this method to add some load operations. 
      // If you need to use the loader, you may need to use them here.
    },
    create: function() {
     
      this.background = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'background');
      // middle ground
      this.midground = this.game.add.tileSprite(0, (this.game.height - 480), this.game.width, (this.game.height + 480), 'midground');
      //add animated ground
      this.ground = this.game.add.tileSprite(0, this.game.height - 30, this.game.width, 64, 'ground');
      //scroll the ground
      this.ground.autoScroll(-20, 0); 

      this.tutorialPaperOne = this.game.add.sprite(this.game.width, 250, 'toipap');
      this.tutorialPaperOne.alpha = 0;

      this.tutorialPaperTwo = this.game.add.sprite(this.game.width, 250, 'toipap');
      this.tutorialPaperTwo.alpha = 0;

      this.tutorialPepper = this.game.add.sprite(this.game.width, this.game.height * 0.5, 'chilliPepper');


      this.turd = new Turd(this.game, 50,this.game.height * 0.5);
      this.game.add.existing(this.turd);
      this.turd.body.gravity.y = 0;

      this.tutorialFinger =  this.game.add.sprite(this.game.width * 0.5, this.game.height,'tutorialFinger');
      this.tutorialFinger.anchor.setTo(0.5,0);

      this.tutorialArrowUp = this.game.add.sprite(this.turd.body.x + 100, this.turd.body.y-32, 'tutorialArrowUp');
      this.tutorialArrowUp.anchor.setTo(0.5,0.5);
      this.tutorialArrowUp.alpha = 0;

   /*   this.howToPlay = this.game.add.bitmapText(this.game.width * 0.5, 20, 'amaticWhite', 'How to play', 60);
      this.howToPlay.updateText();
      this.howToPlay.x = this.game.width * 0.5 - this.howToPlay.textWidth * 0.5;*/

      this.tutorialText1 = this.game.add.sprite(0, 30, 'tutorialText1' );
      this.tutorialText2 = this.game.add.sprite(this.game.width, 30, 'tutorialText2' );
      this.tutorialText3 = this.game.add.sprite(this.game.width, 30, 'tutorialText3' );      
      this.tutorialText4 = this.game.add.sprite(this.game.width, 30, 'tutorialText4' );        

      this.tutorialText1.width = this.game.width;
      this.tutorialText2.width = this.game.width;
      this.tutorialText3.width = this.game.width;
      this.tutorialText4.width = this.game.width;

      this.tutorialText1.height = this.game.width / (640/135);
      this.tutorialText2.height = this.game.width / (640/135);
      this.tutorialText3.height = this.game.width / (640/135);
      this.tutorialText4.height = this.game.width / (640/135);

      this.game.add.tween(this.tutorialFinger).to({y: this.game.height - 200}, 150).start();
      this.game.add.tween(this.tutorialArrowUp).to({alpha: 1}, 350).start();
  
      this.game.input.onDown.add(this.advance_step, this);  

      //step variable for progress checking
      this.step = 1;
    },
    update: function() {
      // state update code
    },
    advance_step: function() {
      console.log('We are at step ' + this.step);     
      this.execute_step(this.step); 
      this.step = this.step + 1;      
    },
    execute_step: function(stepNumber){
      //------------------------------------ STEP 2 ------------------------------------
      if (stepNumber == 1){

        //turn the up arrow downwards
        this.game.add.tween(this.tutorialArrowUp).to({angle: 90}, 300).start();        
        //stop the hover tween loop      
      //  this.turdHover.stop();                   
      //  this.turdHover.destroy();
        //define tween for fake jump
        var fakeJump = this.game.add.tween(this.turd);
        fakeJump.to({y: this.game.height * 0.5 - 60}, 300, Phaser.Easing.Cubic.Out);
        fakeJump.start();

        this.turd.animations.stop('flap');

        this.turd.animations.play('flapJump'); 

        this.game.add.tween(this.tutorialPaperOne)
          .to({alpha: 1, x: this.turd.x + 64}, 500)
          .start();
        this.game.add.tween(this.tutorialFinger).to({y: this.game.height}, 350).start();
        this.game.add.tween(this.tutorialText1).to({x: - this.game.width}, 500).start();
        this.game.add.tween(this.tutorialText2).to({x: 0}, 500).start();


      }

      //------------------------------------ STEP 3 ------------------------------------
      else if (stepNumber == 2){
        var paperMoveStep2 = this.game.add.tween(this.tutorialPaperOne);
        paperMoveStep2.to({x: this.turd.x - 32}, 500, Phaser.Easing.Cubic.In);
        paperMoveStep2.start();

        this.game.add.tween(this.turd)
          .to({y: this.tutorialPaperOne.y + 10}, 500, Phaser.Easing.Cubic.In)
          .to({y: this.tutorialPaperOne.y - 60}, 500, Phaser.Easing.Cubic.Out)
          .start();

        paperMoveStep2.onComplete.add(function(){
          this.tutorialPaperOne.frame = 4;
          var paperDieStep2 = this.game.add.tween(this.tutorialPaperOne);
          paperDieStep2.to({y: this.game.height - this.tutorialPaperOne.height, x: -20 }, 500, Phaser.Easing.Cubic.Out);
          paperDieStep2.start();
          var secondPaperStep2 = this.game.add.tween(this.tutorialPaperTwo);
          secondPaperStep2.to({alpha: 1, x: this.turd.x + 64}, 500);
          secondPaperStep2.start();
        }, this);

        this.game.add.tween(this.tutorialText2).to({x: - this.game.width}, 500).start();
        this.game.add.tween(this.tutorialText3).to({x: 0}, 500).start();

      }
      //------------------------------------ STEP 4 ------------------------------------
      else if (stepNumber == 3){
          
          this.game.add.tween(this.turd)
            .to({y: this.tutorialPaperTwo.y + 10}, 500, Phaser.Easing.Cubic.In)
            .to({y: this.tutorialPaperTwo.y - 60}, 500, Phaser.Easing.Cubic.Out)
            .start();

          this.game.add.tween(this.tutorialPaperOne)
            .to({y: this.game.height, alpha: 0}, 500)
            .start();            

          this.game.add.tween(this.tutorialPaperTwo)
            .to({x: this.turd.x - 32}, 500, Phaser.Easing.Cubic.In)
            .start()
            .onComplete.add(function(){
              this.tutorialPaperTwo.frame = 4;
              this.game.add.tween(this.tutorialPaperTwo)
                .to({y: this.game.height - this.tutorialPaperTwo.height, x: -20 }, 500, Phaser.Easing.Cubic.Out)
                .start();
              this.game.add.tween(this.tutorialPepper)
                .to({x: this.turd.x + 100}, 500)
                .start();  
            }, this);

          this.game.add.tween(this.tutorialText3).to({x: - this.game.width}, 500).start();
          this.game.add.tween(this.tutorialText4).to({x: 0}, 500).start();

      }
      //------------------------------------ STEP 5 ------------------------------------
      else if (stepNumber == 4){

        this.game.add.tween(this.turd)
            .to({y: this.game.height * 0.5, alpha: 0}, 500, Phaser.Easing.Cubic.In)            
            .start();

        this.game.add.tween(this.tutorialPaperTwo)
            .to({y: this.game.height, alpha: 0}, 500)
            .start();   

        this.game.add.tween(this.tutorialText4)
          .to({x: - this.game.width}, 500)
          .start();

        this.game.add.tween(this.tutorialPepper)
          .to({x: this.turd.x + 10, alpha :0}, 500, Phaser.Easing.Cubic.In)
          .start();

        this.game.add.tween(this.tutorialArrowUp)
          .to({alpha:0}, 500)
          .start()
          .onComplete.add(function(){
            this.tutorialPepper.destroy();
            this.tutorialText1.destroy();
            this.tutorialText2.destroy();
            this.tutorialText3.destroy();
            this.tutorialText4.destroy();
            this.tutorialFinger.destroy();
            this.tutorialArrowUp.destroy();
            this.turd.destroy();
            this.game.state.start('menu');
          }, this);
      }
    },
    paused: function() {
      // This method will be called when game paused.
    },
    render: function() {
      // Put render operations here.
    },
    shutdown: function() {
      // This method will be called when the state is shut down 
      // (i.e. you switch to another state from this one).
    }
  };
module.exports = Tutorial;

},{"../prefabs/turd":2}]},{},[1])