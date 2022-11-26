import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'



const List = [
  'Omar Cherkaoui',
  'Dunia Batma',
  'Tarek El Ghayate',
  'Simo Dekkaki',
  'Marouane El Ghayate',
  'Zakaria Bousfiha',
  'Soufiane Fissassen',
  'Hamza Abbadi',
  'Anas Hafyani',
  'Sami Yahyaoui',
  'Taha Essou',
  'Ayoub Sola',
  'Mehdi L9sir'
]

const Names = () => {

  const [searchField, setSearchField] = useState('');
  const [filteredList, setFilterList] = useState(List);

  useEffect(() => {
    const newList = List.filter((item) => {
      return item.toLocaleLowerCase().includes(searchField);
    });

    setFilterList(newList);
  }, [List, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className='App'>
      <div className='input'>
      <input type='search' onChange={onSearchChange} />
      </div>
      <div className='titles'>
        {filteredList.map((item) => {
          return <h1 key={item}>{item}</h1>;
        })}
      </div>
    </div>
  );
}


var id = 1

const defaultInfo = {
  id: '',
  name: '',
  city: 'Fes',
  sex: 'F',
  date: '',
  email: '',
  password: ''
}
const initialinterests = {
  'foot': false,
  'swimming': false,
  'cooking': false
}
// const Table = () => {


//   const [person, setPerson] = useState(defaultInfo)
//   const [interests, setinterests] = useState(initialinterests)
//   const [group, setgroup] = useState([])
//   const { name, city, sex, date } = person
//   const resetPerson = () => setPerson(defaultInfo)


//   const handleChange = event => {
//     if (event.target.type === 'checkbox') {
//       const { value, checked } = event.target
//       setinterests({ ...interests, [value]: checked })
//       return
//     }
//     const { name, value } = event.target
//     setPerson({ ...person, [name]: value })
//     defaultInfo.sex = person.sex
//     defaultInfo.city = person.city
//   }


//   const handleSubmit = event => {
//     event.preventDefault()
//     const filteredinterests = Object.keys(interests).filter(key => interests[key] == true)
//     const newgroup = group
//     id += 1
//     newgroup.push({
//       name, city, sex, filteredinterests, id, filteredinterests, date
//     })
//     setinterests(initialinterests)
//     setgroup(newgroup)
//     resetPerson()
//   }
//   const interestsField = person => person.filteredinterests.map(elt => <span key={elt}> {elt}, </span>)
//   const table = group.map(person => {
//     return (<tr key={person.id}>
//       <td>{person.name}</td>
//       <td>{person.city}</td>
//       <td>{person.sex}</td>
//       <td>{interestsField(person)}</td>
//       <td>{new Date(person.date).toLocaleDateString()}</td>
//     </tr>)
//   })

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder='Name' required 
//         name='name' value={name} onChange={handleChange} />
//         <br />
//         <select name='city' value={city} onChange={handleChange}>
//           <option value={undefined} selected disabled >Choose a city</option>
//           <option value="Fes">Fes</option>
//           <option value="Rabat">Rabat</option>
//           <option value="Casablanca">Casablanca</option>
//         </select><br />
//         sex: <input type="radio" name='sex' required 
//         value="Female" onChange={handleChange} defaultChecked /> Female 
//         <input type="radio" name='sex' value="Male" 
//         onChange={handleChange} /> Male 
//         <br />
//         interests: <br />
//         Football <input type="checkbox" value='foot' 
//         checked={interests.foot} onChange={handleChange} /> 
//         <br />
//         Swimming <input type="checkbox" value='swimming'
//         checked={interests.swimming} onChange={handleChange} /> 
//         <br />
//         Cooking <input type="checkbox" value='cooking' 
//         checked={interests.cooking} onChange={handleChange} /> 
//         <br />
//         Date of birth: <input type="date" value={date}
//         name='date' required onChange={handleChange} /><br />
//         <input type='submit' />
//       </form>
//       <br />
//       <table border={1} cellPadding='10px'>
//         <thead>
//           <tr>
//             <td>Name</td>
//             <td>City</td>
//             <td>Sex</td>
//             <td>Interests</td>
//             <td>Birth Date</td>
//           </tr>
//         </thead>
//         <tbody>
//           {table}
//         </tbody>
//       </table>
//     </div>
//   )
// }


const Table = () => {


  const [person, setPerson] = useState(defaultInfo)
  const [interests, setinterests] = useState(initialinterests)
  const [group, setgroup] = useState([])
  const { name, city, sex, date, email, password } = person
  const resetPerson = () => setPerson(defaultInfo)


  const handleChange = event => {
    if (event.target.type === 'checkbox') {
      const { value, checked } = event.target
      setinterests({ ...interests, [value]: checked })
      return
    }
    const { name, value } = event.target
    setPerson({ ...person, [name]: value })
    defaultInfo.sex = person.sex
    defaultInfo.city = person.city
  }


  const handleSubmit = event => {
    event.preventDefault()
    const filteredinterests = Object.keys(interests).filter(key => interests[key] == true)
    const newgroup = group
    id += 1
    newgroup.push({
      name, city, sex, filteredinterests, id, filteredinterests, date, email, password
    })
    setinterests(initialinterests)
    setgroup(newgroup)
    resetPerson()
  }
  const interestsField = person => person.filteredinterests.map(elt => <span key={elt}> {elt}, </span>)
  const table = group.map(person => {
    return (<tr key={person.id}>
      <td>{person.name}</td>
      <td>{person.email}</td>
      <td>{person.city}</td>
      <td>{person.sex}</td>
      <td>{interestsField(person)}</td>
      <td>{new Date(person.date).toLocaleDateString()}</td>
    </tr>)
  })

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Name' required 
        name='name' value={name} onChange={handleChange} />
        <br />
        <input type="email" name='email' value={email} 
        placeholder='E-mail' onChange={handleChange}/> <br />
        <input type="password" name='password' value={password}
         placeholder='Password' onChange={handleChange}/> <br />

        <select name='city' value={city} onChange={handleChange}>
          <option value={undefined} selected disabled >Choose a city</option>
          <option value="Fes">Fes</option>
          <option value="Rabat">Rabat</option>
          <option value="Casablanca">Casablanca</option>
        </select><br />
        sex: <input type="radio" name='sex' required 
        value="Female" onChange={handleChange} defaultChecked /> Female 
        <input type="radio" name='sex' value="Male" 
        onChange={handleChange} /> Male 
        <br />
        interests: <br />
        Football <input type="checkbox" value='foot' 
        checked={interests.foot} onChange={handleChange} /> 
        <br />
        Swimming <input type="checkbox" value='swimming'
        checked={interests.swimming} onChange={handleChange} /> 
        <br />
        Cooking <input type="checkbox" value='cooking' 
        checked={interests.cooking} onChange={handleChange} /> 
        <br />
        Date of birth: <input type="date" value={date}
        name='date' required onChange={handleChange} /><br />
        <input type='submit' />
      </form>
      <br />
      <table border={1} cellPadding='10px'>
        <thead>
          <tr>
            <td>Name</td>
            <td>E-mail</td>
            <td>City</td>
            <td>Sex</td>
            <td>Interests</td>
            <td>Birth Date</td>
          </tr>
        </thead>
        <tbody>
          {table}
        </tbody>
      </table>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>
      <h1>TP1</h1>
      <Table />
      <h1>TP 2</h1>
      <Names />
    </React.StrictMode>
  )
