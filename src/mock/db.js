export const teachers = [
  { id: 't1', name: 'Jacqueline Taylor', instrument: 'cello', bio: 'Professional cellist; chamber musician; teacher for all levels.', pricePerHour: 90, styles:['classical','wedding repertoire'], photoUrl:'https://via.placeholder.com/200x200?text=Cello' },
  { id: 't2', name: 'Avery Chen', instrument: 'violin', bio: 'Conservatory-trained violinist focusing on audition prep.', pricePerHour: 85, styles:['classical'], photoUrl:'https://via.placeholder.com/200x200?text=Violin' }
]
export const lessonSlots = [
  { teacherId: 't1', startISO: new Date(Date.now()+24*3600*1000).toISOString(), endISO: new Date(Date.now()+24*3600*1000+3600*1000).toISOString() },
  { teacherId: 't2', startISO: new Date(Date.now()+48*3600*1000).toISOString(), endISO: new Date(Date.now()+48*3600*1000+3600*1000).toISOString() }
]
export const ensembles = [
  { id:'q1', name:'String Quartet – Classic', description:'Ceremony + cocktail hour; classical standards.', durationMins:120, baseRate:1200, addOns:[{id:'ao1', name:'Extra 30 minutes', price:250},{id:'ao2', name:'Special request piece', price:150}] },
  { id:'duo1', name:'Cello & Piano Duo', description:'Elegant duo for intimate settings or small venues.', durationMins:90, baseRate:800 }
]
