const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile-img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('animated-bg')
const animated_bg_texts = document.querySelectorAll('animated-bg-text')

setTimeout(getData, 2000)

function getData() {
    header.innerHTML = '<img src="https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="picture">'
    title.innerHTML = 'My Profile'
    excerpt.innerHTML = 'Hello, my name is Giorgi and I am learning web development at this time I am working to improve my skills in front-end development.'
    profile_img.innerHTML = '<img src="https://scontent.ftbs7-1.fna.fbcdn.net/v/t39.30808-6/242208852_3065755353749994_8509295546726160150_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=174925&_nc_eui2=AeEd6qrU9vgLjYSzpp1peLMd9ML3PHmGKZT0wvc8eYYplFTj3ojR57nwbaflSXhnrXh_rDAsMWcBuyMXIU8QMXoP&_nc_ohc=aMrGKjdEi8wAX_YqS8H&_nc_ht=scontent.ftbs7-1.fna&oh=00_AT-mo7G0Smmwtzlfk58mBKqGTzAkoQkIW0BxcBmDuYBq-w&oe=61FE86C6" alt="my picture">'
    name.innerHTML = 'Gio Gvasalia'
    date.innerHTML = '02.02.2022'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bs'))
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}