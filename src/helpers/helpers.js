

export const getRandomNumber = max => Math.floor(Math.random() * Math.floor(max + 1))

const backgrounds = ["You have spent your life in the service of a temple to a specific god or pantheon of gods. You act as an intermediary between the realm of the holy and the mortal world, performing sacred rites and offering sacrifices in order to conduct worshipers into the presence of the divine.", "You are an experienced criminal with a history of breaking the law. You have spent a lot of time among other criminals and still have contacts within the criminal underworld. You’re far closer than most people to the world of murder, theft, and violence that pervades the underbelly of civilization, and you have survived up to this point by flouting the rules and regulations of society.", "You come from a humble social rank, but you are destined for so much more. Already the people of your home village regard you as their champion, and your destiny calls you to stand against the tyrants and monsters that threaten the common folk everywhere.", "You are haunted by something so terrible that you dare not speak of it. You’ve tried to bury it and run away from it, to no avail. Whatever this thing is that haunts you can’t be slain with a sword or banished with a spell. It might come to you as a shadow on the wall, a bloodcurdling nightmare, a memory that refuses to die, or a demonic whisper in the dark. The burden has taken its toll, isolating you from most people and making you question your sanity. You must find a way to overcome it before it destroys you.", "You understand wealth, power, and privilege. You carry a noble title, and your family owns land, collects taxes, and wields significant political influence.", "War has been your life for as long as you care to remember. You trained as a youth, studied the use of weapons and armor, learned basic survival techniques, including how to stay alive on the battlefield."]

export const getRandomBackground = () => {
  const randomIndex = getRandomNumber(backgrounds.length - 1)
  return backgrounds[randomIndex]
}

const names = ["Lollidra", "Legogriffin Alelf", "Grintroll", "Agaffin Alexandrager", "Griphine Pickergriffin", "Harmraham Evilbinson", "Moraspell Grangrobinson", "Barabba Robertsett", "Faye Walsh", "Jenna Turner", "Adam Blaese", "Aaliyah Mendoza", "Joshua Castillo", "Isobel O'Quinn"]

export const getRandomName = () => {
  const randomIndex = getRandomNumber(names.length - 1)
  return names[randomIndex]
}

// refactor
const races = ["human", "orc", "duck", "elf", "dwarf"]

export const getRandomRace = () => {
  const randomIndex = getRandomNumber(races.length - 1)
  return races[randomIndex]
}

export const capitalize = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const countObjects = (object, threshold) => {
  const entries = Object.entries(object)
  let counter = 0
  entries.map( item => {
    if (item[1]) {
      counter += 1
    }
    return item
  })

  if(counter > threshold){
    return false
  }else{
    return true
  }
}
