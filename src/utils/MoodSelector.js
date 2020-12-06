export default class MoodSelector {
  constructor(mood, description, setMood, setDescription) {
    this.mood = mood;
    this.description = description;
    this.setMood = setMood;
    this.setDescription = setDescription;
  }

  handleClick(e) {
    const selectedMood = e.currentTarget.dataset.mood;
    if (this.mood === selectedMood) {
      this.setMood(null);
    } else {
      this.setMood(selectedMood);
    }
  }

  handleInput(e) {
    this.setDescription(e.currentTarget.value);
  }
}
