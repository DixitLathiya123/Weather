const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export const getDateAndHours = (date: string) => {
  const newDate = new Date(date)
  let dateAndTime = {
    date: days[newDate.getDay()].substring(0, 3),
    time: newDate.getHours()+ ":"+ newDate.getMinutes()+"0"
  }
  return dateAndTime
}
