const initialState = {
  language: 'ελληνικά',
  programmingBackground: 'dynamic',
  showEventColors: false,
  // φίλτροΚατηγορίαςΧρονολογίου: 'Προγραμματισμός',
  φίλτροΚατάστασηςΓεγονότωνΧρονολογίου: '',
  isLoading: false,
  showAlert: false,
  alertType: '',
  alertText: '',
  showSidebar: false,
  technologies: [],
  totalTechnologies: 0,
  certificate: '',
  search: '',
  searchStatus: 'Όλα',
  searchType: 'Όλα',
  sortOptions: ['Νεότερες', 'Παλαιότερες', 'Α -> Ω', 'Ω -> Α'],
  sort: 'Νεότερες',
};

export default initialState;
