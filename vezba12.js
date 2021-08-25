function likes(names) {
    len = names.length
    switch (true) {
        case 0 === len:
            return 'no one likes this';
            case 1 === len:
                return `${names[0]} likes this`
                case 2 === len:
                    return `${names[0]} and ${names[1]} liked this`
                    case 3 === len:
                        return `${names[0]}, ${names[1]} and ${names[2]} liked this`
                        case 4 === len:
                            return `${names[0]}, ${names[1]} and ${len - 2} others liked this`
        default:
            break;
    }
}
console.log(likes([1, 2, 3, 4]))

