import axios from 'axios'
import { useState } from 'react'

const useFetch = (baseUrl) => {
  const [infoApi, setInfoApi] = useState()
  //get
  const  getApi  = (path) => {
    const url = `${baseUrl}${path}/`
    axios
    .get(url)
    .then(res => setInfoApi(res.data))
    .catch(err => console.log(err))
    
  }

  //post
  const postApi = (path, data) => {
    const url = `${baseUrl}${path}/`
    axios
    .post(url, data)
    .then(res => {console.log(res.data)
      setInfoApi([...infoApi, res.data])
    } )
    .catch(err => console.log(err))
  }

  //delete

  const deleteApi = (path, id) => {
    const url = `${baseUrl}${path}/${id}/`
    axios
    .delete(url)
    .then(res => {console.log(res.data) 
      const infoApiFilter = infoApi.filter((e) => e.id != id)
      setInfoApi(infoApiFilter)
    })
    .catch(err => console.log(err))
  }

  //update

  const updateApi = (path, id, data) => {
    const url = `${baseUrl}${path}/${id}/`;
    axios
      .patch(url, data)
      .then((res) => {
        console.log(res.data)
        const infoApiMapped = infoApi.map(e => e.id === id ? res.data : e)
        setInfoApi(infoApiMapped)
        
      })
      .catch((err) => console.log(err))
      

  };




  return [infoApi, getApi, postApi, deleteApi, updateApi]
}

export default useFetch

