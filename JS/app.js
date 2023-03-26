
const container = document.querySelector(".container")
const userTxt = document.querySelector(".user-text")
const userImg = document.querySelector(".user-img")
const userName = document.querySelector(".username")
const job = document.querySelector(".job")

const testimonials = [
    {
        name: 'Ahmet Sadkoğlu',
        position: 'Front-End Developer',
        photo: '',
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
        text: ''
    }
]