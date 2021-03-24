export default (req, res) => {
    let time = new Date();   
    let date = ("0" + time.getDate()).slice(-2); // current date // adjust 0 before single digit date
    let month = ("0" + (time.getMonth() + 1)).slice(-2); // current month
    let year = time.getFullYear(); // current year
    let hours = time.getHours(); // current hours
    let minutes = time.getMinutes(); // current minutes
    let seconds = time.getSeconds(); // current seconds
    res.status(200).json({time:time, date:date,month:month,year:year,hours:hours,minutes:minutes,seconds:seconds});
};

// export default (req, res) => {
//     res.status(200).json({
//       test: 'Hello Level Up'
//     });
//   };