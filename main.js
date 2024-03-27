let grupo_bomba = []
let lixo_espacial = []
let bomba
let lixo = {
    time1: 0,
    time2: 0,
    time3: 0,
    time4: 0,
    time5:0,

    crialixo(){
        this.time1 += 1
        this.time2 += 1
        this.time3 += 1
        this.time4 += 1
        this.time5 += 1
        let pos_x = (Math.random() * (438 - 2 +1)+2)
        let pos_x2 = (Math.random() * (438 - 2 +1)+2)
        let pos_x3 = (Math.random() * (438 - 2 +1)+2)
        let pos_x4 = (Math.random() * (438 - 2 +1)+2)
        let pos_x5 = (Math.random() * (438 - 2 +1)+2)
        if(this.time1 >=100){
            this.time1 = 0
            lixo_espacial.push(new Lixo(pos_x,-200,50,50,'./assets/img/lixo.png'))
            // console.log(lixo_espacial)
        }
        if(this.time2 >=200){
            this.time2 = 0
            lixo_espacial.push(new Lixo(pos_x2,-300,50,50,'./assets/img/banana.png'))
            // console.log(lixo_espacial)
        }
        if(this.time3 >=300){
            this.time3 = 0
            lixo_espacial.push(new Lixo(pos_x3,-400,50,50,'./assets/img/peixe.png'))
            // console.log(lixo_espacial)
        }
        if(this.time4 >=400){
            this.time4 = 0
            lixo_espacial.push(new Lixo(pos_x4,-500,50,50,'./assets/img/maca.png'))
            // console.log(lixo_espacial)
        }
        if(this.time5 >=220){
            this.time5 = 0
            lixo_espacial.push(new Lixo(pos_x5,-500,50,50,'./assets/img/bomba.png'))
            console.log(lixo_espacial)
        }
    },
    
    des(){
        lixo_espacial.forEach((lixo)=>{
            lixo.des_obj()
        })
    },
    
    atual(){
        this.crialixo()
        lixo_espacial.forEach((lixo)=>{
            lixo.mov()
            if(lixo.y >= 710){
                lixo_espacial.splice(lixo_espacial.indexOf(lixo),1)
            }
        })
    }
}