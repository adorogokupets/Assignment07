//STEP 1
// let movieList = ['Shawshank Redemption','Lord of the Rings', 
// 'Inception','Fight Club', 'Matrix']
// console.log(movieList[1])

//STEP 2
// let movies = new Array(5)
// movies[0] = 'Shawshank Redemption'
// movies[1] = 'Lord of the Rings'
// movies[2] = 'Inception'
// movies[3] = 'Fight Club'
// movies[4] = 'Matrix'

// console.log(movies[0])

//STEP 3
// let movies = new Array(5)
// movies[0] = 'Shawshank Redemption'
// movies[1] = 'Lord of the Rings'
// movies[2] = 'Inception'
// movies[3] = 'Fight Club'
// movies[4] = 'Matrix'
// movies.splice(2,0, 'Interstellar')

// console.log(movies.length)

//STEP 4
// let movies = []
// movies[0] = 'Shawshank Redemption'
// movies[1] = 'Lord of the Rings'
// movies[2] = 'Inception'
// movies[3] = 'Fight Club'
// movies[4] = 'Matrix'

// movies.shift()

// console.log(movies)

//STEP 5
// let movies = []
// movies[0] = 'Shawshank Redemption'
// movies[1] = 'Lord of the Rings'
// movies[2] = 'Inception'
// movies[3] = 'Fight Club'
// movies[4] = 'Matrix'
// movies[5] = 'Interstellar'
// movies[6] = 'Matrix2'

// for (let i in movies){
//     console.log(movies[i])
// }



//STEP 6
// let movies = []
// movies[0] = 'Shawshank Redemption'
// movies[1] = 'Lord of the Rings'
// movies[2] = 'Inception'
// movies[3] = 'Fight Club'
// movies[4] = 'Matrix'
// movies[5] = 'Interstellar'
// movies[6] = 'Matrix2'

// for (let i in movies){
//     console.log(movies[i])
// }

//STEP 7
// let movies = []
// movies[0] = 'Shawshank Redemption'
// movies[1] = 'Lord of the Rings'
// movies[2] = 'Inception'
// movies[3] = 'Fight Club'
// movies[4] = 'Matrix'
// movies[5] = 'Interstellar'
// movies[6] = 'Matrix2'

// movies.sort()

// for (let i of movies){
//     console.log(i)
// }

//STEP 8
// let movies = []
// movies[0] = 'Shawshank Redemption'
// movies[1] = 'Lord of the Rings'
// movies[2] = 'Inception'
// movies[3] = 'Fight Club'
// movies[4] = 'Matrix'
// movies[5] = 'Interstellar'
// movies[6] = 'Matrix2'

// let leastFavMovies = ['Regret Movie1', 'Regret Movie2', 'Regret Movie3']

// console.log('Movies I like:\n\n')

// movies.forEach(movie => {
//     console.log(movie)
// });
// console.log('')
// console.log('Movies I regret watching:\n\n')

// leastFavMovies.forEach(movie => {
//     console.log(movie)
// })

//STEP 9
// let movies = []
// movies[0] = 'Shawshank Redemption'
// movies[1] = 'Lord of the Rings'
// movies[2] = 'Inception'
// movies[3] = 'Fight Club'
// movies[4] = 'Matrix'
// movies[5] = 'Interstellar'
// movies[6] = 'Matrix2'

// let leastFavMovies = ['Regret Movie1', 'Regret Movie2', 'Regret Movie3']

// movies = movies.concat(leastFavMovies)
// movies.reverse()

// movies.forEach(movie => {
//     console.log(movie)
// });


//STEP 10
// let movies = []
// movies[0] = 'Shawshank Redemption'
// movies[1] = 'Lord of the Rings'
// movies[2] = 'Inception'
// movies[3] = 'Fight Club'
// movies[4] = 'Matrix'
// movies[5] = 'Interstellar'
// movies[6] = 'Matrix2'

// let leastFavMovies = ['Regret Movie1', 'Regret Movie2', 'Regret Movie3']

// movies = movies.concat(leastFavMovies)
// movies.reverse()

// console.log(movies.pop())

//STEP 11
// let movies = []
// movies[0] = 'Shawshank Redemption'
// movies[1] = 'Lord of the Rings'
// movies[2] = 'Inception'
// movies[3] = 'Fight Club'
// movies[4] = 'Matrix'
// movies[5] = 'Interstellar'
// movies[6] = 'Matrix2'

// let leastFavMovies = ['Regret Movie1', 'Regret Movie2', 'Regret Movie3']

// movies = movies.concat(leastFavMovies)
// movies.reverse()

// console.log(movies.shift())

//STEP 12
// let movies = []
// movies[0] = 'Shawshank Redemption'
// movies[1] = 'Lord of the Rings'
// movies[2] = 'Inception'
// movies[3] = 'Fight Club'
// movies[4] = 'Matrix'
// movies[5] = 'Interstellar'
// movies[6] = 'Matrix2'

// let leastFavMovies = ['Regret Movie1', 'Regret Movie2', 'Regret Movie3']

// movies = movies.concat(leastFavMovies)
// movies.reverse()

// let extraFavMovies = ['John Wick','John Wick2', 'John Wick3']

// leastFavMovies.forEach((movie, index) =>{
//     movies[movies.indexOf(movie)] = extraFavMovies[index]
// })

// console.log(movies)

//STEP 13
// let movies = [
//  ['Shawshank Redemption', 1],
//  ['Lord of the Rings', 2],
//  ['Inception', 3],
//  ['Interstellar', 4],
//  ['Fight Club', 5]
// ]

// let listOfMovies = movies.map(movie => {
//     return movie.filter(item => {
//         return typeof item === 'string'
//     })
// })

// listOfMovies.forEach(movie => {
//     console.log(movie[0])
// })


//STEP 14
// let employees = ['ZAK', 'JESSICA', 'MARK', 'FRED', 'SALLY']
// let showEmployee = (employees) => {
//     employees.forEach(employee => {
//         console.log(employee)
//     });
// }

// showEmployee(employees)

//STEP 15

// function filterValues (elements){
//     return elements.filter(element => {
//         return element !== false && element !== null && element !== 0 && element !== ''
//     })
// }

// console.log(filterValues([58, '', 'abcd', true, null, false, 0]))

//STEP 16
// function displayRandomNumber(numbers){
//     let randomIndex = Math.floor(Math.random() * numbers.length)
//     return numbers[randomIndex]
// }

// let numbers = [1,-5,6,20,3,5,7,10,11,15]

// console.log(displayRandomNumber(numbers))

//STEP 17
// function findMaxNumber (numbers) {
//     let maxNumber = numbers[0]
//     for(let i=1; i<numbers.length; i++){
//         if(maxNumber < numbers[i]){
//             maxNumber = numbers[i]
//         }
//     }
//     return maxNumber
// }
// let numbers = [1,-5,6,20,3,5]
// console.log(findMaxNumber(numbers))
