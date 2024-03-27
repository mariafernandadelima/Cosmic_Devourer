let des = document.getElementById('des').getContext('2d')

let BG1 = new BG(0,0,500,700,'./assets/img/fundo.png')
let BG2 = new BG(0,-700,500,700,'./assets/img/fundo2.png')
let BG3 = new BG(0,-1400,500,700,'./assets/img/fundo.png')
let BG4 = new BG(0,-2100,500,700,'./assets/img/fundo2.png') 

let monstro = new Monstro(200,600,50,70,'./assets/img/monstro_1.png')  

let txt_pts = new Texto()
let pts = new Texto()
let txt_vidas = new Texto()
let n_vidas = new Texto()
let txt_game = new Texto()

const som1 = new Audio('./assets/audio/musica-tema.mp3')
const som2 = new Audio('./assets/audio/game-over.mp3')
som1.volume = 1.0
som1.loop = true
som2.volume = 0.7

let jogar = true

document.addEventListener('keydown', (ev)=>{
    
    som1.play()
    if(ev.key === 'ArrowLeft'){
        monstro.dir_x -=5
    }
    if(ev.key === 'ArrowRight'){
        monstro.dir_x +=5
    }
    if(ev.key === 'ArrowUp'){
        monstro.dir_y -=5
    } 
    if(ev.key === 'ArrowDown'){
        monstro.dir_y +=5
    }    
})

document.addEventListener('keyup', (ev)=>{
    if(ev.key === 'ArrowLeft'){
       monstro.dir_x = 0
    }
    if(ev.key === 'ArrowRight'){
       monstro.dir_x = 0
    }
    if(ev.key === 'ArrowUp'){
        monstro.dir_y = 0
    } 
    if(ev.key === 'ArrowDown'){
        monstro.dir_y = 0
    }
})
function game_over(){
    if(monstro.vida <=0){
        jogar = false
        som1.pause()
        som2.play()
        // música com o jogo parado
    }
}

function pontos(){
    if(lixo_espacial.point(lixo)){
        lixo_espacial.pts +=1
    }
       
    
}
function colisao(){
    lixo_espacial.forEach((bomba)=>{
        if(monstro.colid(bomba)){
            lixo_espacial.splice(lixo_espacial.indexOf(bomba), 1)
            monstro.pts +=1
            if(bomba.at == './assets/img/bomba.png'){
                monstro.vida -= 1
            }
            if(bomba.vida == 0){jogar = false}
        }
    })
}

function atualiza(){
    if(jogar){
        
    BG1.mov(0,2100)
    BG2.mov(-700,1400)
    BG3.mov(-1400,700)
    BG4.mov(-2100,0) 
    // monstro.anim('monstro_')   
    monstro.mov()
    lixo.atual()
    colisao() 
    game_over()
}
}   

function main(){
    des.clearRect(0,0,500,700)
    desenha()
    atualiza()
    requestAnimationFrame(main)
}

main()