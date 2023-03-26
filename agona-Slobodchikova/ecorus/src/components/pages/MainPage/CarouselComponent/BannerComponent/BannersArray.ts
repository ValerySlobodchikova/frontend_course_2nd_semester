export interface BannerInterface {
    id: number
    text: string
    header: string
    backgroundColor: string
    backgroundImg: string
    buttonText: string
}

export const banners : BannerInterface[] = [
    {
        id: 1,
        text: "Сдай макулатуру или старую одежду и получи скидку на покупку товаров из переработанных материалов",
        header: "Сделаем мир чище",
        backgroundColor: "#B3EDC8",
        backgroundImg: '/assets/recycleBanner.svg',
        buttonText: "Условия сервиса"
    },
    {
        id: 2,
        text: "что среднее время разложения пластмассовых изделий колеблется от 400 до 700 лет,  а полиэтиленовых пакетов — от 100 до 200 лет? ",
        header: "А вы знали...",
        backgroundColor: "#FFE48F",
        backgroundImg: '/assets/bannerPlastic.png',
        buttonText: "Узнать больше"},
    {
        id: 3,
        text: "Медицинские маски не обязательно должны становиться отходами. Их тоже можно сдать на переработку.",
        header: "Что с масками?",
        backgroundColor: "#BFF0DE",
        backgroundImg: '/assets/maskBanner.png',
        buttonText: "Пункты сбора масок"
    }
]
export default banners;