const num = [300, 10, 40, 20];
const dates = ['12/1/2022', '12/1/2013', '12/1/2015']
dates.sort((num1, num2) => {
    return new Date(num1) - new Date(num2)
})
// console.log(dates);