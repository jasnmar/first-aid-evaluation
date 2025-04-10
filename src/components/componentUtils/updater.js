function lorUpdater(e, data) {
  const updateElem = e.target.name
  let updatVal = e.target.dataset.item
  const item = e.target.dataset.group
  if (e.target.type === "checkbox") {
    updatVal = e.target.checked
  } 
  data = { ...data, [item+updateElem]: updatVal }
  // console.log({ ...data, [item+updateElem]: updatVal })
  // if (updateElem === "responsiveness") {
  //   checkObserve(item, updatVal)
  // }

  // function checkObserve(item, value) {
  //   const observeList = document.getElementById(item + "-check")
  //   if (value === "alert") {
  //     if (observeList) {
  //       observeList.classList.remove("hidden")
  //       //TODO: uncheck all of the elements
  //     }
  //   } else {
  //     if (observeList) {
  //       observeList.classList.add("hidden")
  //     }
  //   }
  // }
  return data
}

function lorObjectUpdater(e, data) {
  const updateElem = e.target.dataset.item
  const updatVal = e.target.checked
  const updateType = e.target.type
  // console.log('updateType: ', updateType )
  const responseObject = data
  const checks = responseObject.checks
  const options = responseObject.options
  if(updateType === 'checkbox') {
    const newChecks = checks.map(check => {
      if(check.id === updateElem) {
        check.checked = updatVal
      } 
      return check
    })
    data.checks = newChecks
  }
  
  if(updateType === 'radio') {
    const newOptions = options.map(option => {
      if(option.id === updateElem) {
        option.checked = true
      } else {
        option.checked = false
      }
      return option
    })
    data.options = newOptions
  }
  
  
  // console.log('data: ', data)

  return data
  }
  


export { lorUpdater, lorObjectUpdater }