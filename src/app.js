let firstIntervalId;
let secondIntervalId;
function showDate(selection) {
  clearInterval(firstIntervalId);
  clearInterval(secondIntervalId);

  if (selection === "my-location") {
    selection = moment.tz.guess();
  }
  let cities = document.querySelector("#cities-shown");
  console.log(cities);
  cities.innerHTML = "";
  let formattedDate = moment().tz(selection).format("dddd Do YYYY");
  let formattedTime = moment().tz(selection).format("h:mm:ss");
  let formattedDetail = moment().tz(selection).format("A");
  let city = selection.split("/")[1].replace("_", "");
  console.log(formattedDate);
  console.log(formattedTime);
  console.log(formattedDetail);
  console.log(city);
  cities.innerHTML = ` <div id="first-city">
            <div>
              <div class="city" id="America/Los_Angeles">${city}</div>
              <div class="details">${formattedDate}</div>
            </div>
            <div class="time">${formattedTime} <span class="unit">${formattedDetail}</span></div>
          </div> <a href="/" >All cities</a>
  `;
}
function updateData(id, timezone) {
  let container = document.querySelector(`#${id}`);
  let dateElement = container.querySelector(".details");
  let timeElement = container.querySelector(".time");
  let defineTime = moment().tz(timezone);
  let formatDate = defineTime.format("dddd Do YYYY");
  let formatTime = defineTime.format("h:mm:ss");
  let formatUnit = defineTime.format("A");
  console.log(formatUnit);
  dateElement.innerHTML = formatDate;
  timeElement.innerHTML = ` <div class="time">${formatTime} <span class="unit">${formatUnit}</span></div>`;
}
firstIntervalId = setInterval(
  () => updateData("first-city", "America/Los_Angeles"),
  1000
);
updateData("first-city", "America/Los_Angeles");
secondIntervalId = setInterval(() => updateData("second-city", "Asia/Tokyo"));

updateData("second-city", "Asia/Tokyo");
function showTimeCity(event) {
  event.preventDefault();
  let userSelection = event.target.value;

  showDate(userSelection);
}

let dropDownSelect = document.querySelector("#cities");
dropDownSelect.addEventListener("change", showTimeCity);
