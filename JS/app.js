
const container = document.querySelector(".container")
const userTxt = document.querySelector(".user-text")
const userImg = document.querySelector(".user-img")
const userName = document.querySelector(".username")
const job = document.querySelector(".job")

const user = [
    {
        name: 'Ahmet Sadıkoğlu',
        position: 'Front-End Developer',
        photo: '../img/ahmet-sadikoglu.jpg',
        text: `Merhaba Ben Ahmet Sadıkoğlu.25 yaşındayım ve Şişli Endüstri Meslek Lisesi'nde Otomotiv Teknolojisi bölümünden mezun oldum. Stajımı da yine otomotiv sektöründe yaptım. Daha sonra İstanbul Gelişim Üniversitesi'nde Ön Lisans Makine bölümünü bitirdim`
    },
    {
        name: 'Oğuzhan Sadıkoğlu',
        position: '.Net Developer',
        photo: '../img/Oguzhan-sadikoglu.jpg',
        text: 'Nişantaşı Üniversitesi, Bilgisayar Programcılığı Bölümü mezunu. Hayatı boyunca kendini geliştirmeyi benimsemiş, bilgisayar alanıyla oldukça yakından ilgilenen, analitik ve inovatif düşünce yapısına sahip, gelişen teknolojiye adapte olan ve dakik birisidir. Kariyerini yazılım sektöründe ilerletmeyi planlıyor.'

    },
    {
        name: 'Kadir Sadıkoğlu',
        position: 'TV Executive',
        photo: '../img/Kadir-sadikoglu.jpg',
        text: `Hi there 
        I'm a media planner and sometimes a data analyst. I'm trying my best to learn Python these days.
        I love sharing my knowledge with others. When I'm not coding, you can find me writing about games at ForBuff
         I’m currently working on something cool 
         I’m currently learning Python`
    }
]

let idx = 1

function updateUser() {
    // console.log(user[1])

    const { name, position, photo, text } = user[idx]
    userName.innerHTML = name
    job.innerHTML = position
    userImg.src = photo
    userTxt.innerHTML = text

    idx++

    if (idx > user.length - 1) {
        idx = 0
    }
}

setInterval(updateUser, 10000)

// updateUser()