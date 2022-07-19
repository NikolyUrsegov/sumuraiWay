import {ActionsTypes, SidebarType} from "./state";

let sidebar = {
  friends: [
    {
      id: 1,
      name: 'Kolya',
      img: 'https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg',
    },
    {
      id: 2,
      name: 'Vasya',
      img: 'https://uprostim.com/wp-content/uploads/2021/03/image056-90.jpg',
    },
    {
      id: 3,
      name: 'Nikita',
      img: 'https://pixelbox.ru/wp-content/uploads/2020/12/ava-twitch-32.jpg'
    }
  ]
}

const sidebarReducer = (state: SidebarType = sidebar, action: ActionsTypes) => {
  return state
}
export default sidebarReducer;