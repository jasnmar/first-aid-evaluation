function lorUpdater(e, data) {
  const updateElem = e.target.name
  let updatVal = e.target.dataset.item
  const item = e.target.dataset.group
  console.log("updateElem: ", updateElem)
  console.log("updatVal: ", updatVal)
  console.log("item: ", item)
  if (e.target.type === "checkbox") {
    updatVal = e.target.checked
  } 
  data = { ...data, [item+updateElem]: updatVal }
  console.log({ ...data, [item+updateElem]: updatVal })
  if (updateElem === "responsiveness") {
    checkObserve(item, updatVal)
  }

  function checkObserve(item, value) {
    const observeList = document.getElementById(item + "-check")
    if (value === "alert") {
      if (observeList) {
        observeList.classList.remove("hidden")
        //TODO: uncheck all of the elements
      }
    } else {
      if (observeList) {
        observeList.classList.add("hidden")
      }
    }
  }
  return data
}

export { lorUpdater }