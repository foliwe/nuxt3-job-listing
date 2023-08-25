// import { RouteRecordName } from 'vue-router'
// export default function getPageName(routeName: RouteRecordName | null | undefined) {
//     if (routeName) {
//         const words = routeName.toString().split('-')
//         return words[words.length - 1] === 'index' ? 'home' : words[words.length - 1]
//     }
// }


import { RouteRecordName } from 'vue-router'

export default function getPageName(routeName: RouteRecordName | null | undefined) {
    if (routeName) {
        const words = routeName.toString().split('-')
        const lastWord = words[words.length - 1] === 'index' ? 'home' : words[words.length - 1]
        const capitalizedWord = lastWord.charAt(0).toUpperCase() + lastWord.slice(1)
        return capitalizedWord
    }
}
