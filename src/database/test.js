const Database = require('./db')
const createProffy = require('./createProffy')


Database.then(async (db) => {
    //insert datas
   
    
    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // pull datas
    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    // view specific proffy and data proffy
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectClassesAndProffys)

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"
    `)
    console.log(selectClassesSchedules)
})