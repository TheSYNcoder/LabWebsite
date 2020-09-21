import  React from 'react';
import { useState , useEffect } from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import shortid from 'shortid';





export default function PubForm({func , state}) {



  const [addEdu, setaddEdu ] = useState(-1);
  const [edulist , setedu]  = useState(state.pubs.edu);
  const [ delEdu , setdelEdu ] = useState( -1 );
  
  
  const handleChangeEdu = ( index , e  ) => {
    var vals = [...edulist];
    vals[index] = e.target.value;
    setedu(vals);
    let s = state;
    s.pubs.edu = vals;
    func(s);
  }
  
  useEffect(() =>{
    if ( Number(addEdu) !== -1) {
      let es = edulist;
      es.push("");
      setedu(es);
      let s = state;
      s.pubs.edu = es;
      func(s);
      
      setaddEdu(-1);
    }
    if ( delEdu !== -1 ){
      let edu = edulist;
      edu.splice( delEdu , 1 );
      setdelEdu(-1);
      setedu(edu);
      let s = state;
      s.pubs.edu = edu;
      func(s);
    }
    
  },[ delEdu , addEdu ])



  const [addProj, setaddProj ] = useState(-1);
  const [projlist , setProj]  = useState(state.pubs.proj);
  const [ delProj , setdelProj ] = useState( -1 );
  
  
  const handleChangeProj = ( index , e  ) => {
    var vals = [...projlist];
    
    vals[index] = e.target.value;
    setProj(vals);
    let s = state;
    s.pubs.proj = vals;
    func(s);
  }
  
  useEffect(() =>{
    if ( Number(addProj) !== -1) {
      let es = projlist;
      es.push("");
      setProj(es);
      let s = state;
      s.pubs.proj = es;
      func(s);
      setaddProj(-1);
    }
    if ( delProj !== -1 ){
      let Proj = projlist;
      Proj.splice( delProj , 1 );
      setdelProj(-1);
      setProj(Proj);
      let s = state;
      s.pubs.proj = Proj;
      func(s);
    }
    
  },[ delProj , addProj ])



  const [addAch, setaddAch ] = useState(-1);
  const [achlist , setAch]  = useState(state.pubs.ach);
  const [ delAch , setdelAch ] = useState( -1 );
  
  
  const handleChangeAch = ( index , e  ) => {
    var vals = [...achlist];
    
    vals[index] = e.target.value;
    setAch(vals);
    let s = state;
    s.pubs.ach = vals;
    func(s);
  }
  
  useEffect(() =>{
    if ( Number(addAch) !== -1) {
      let es = achlist;
      es.push("");
      setAch(es);
      let s = state;
      s.pubs.ach = es;
      func(s);
      setaddAch(-1);
    }
    if ( delAch !== -1 ){
      let Ach = achlist;
      Ach.splice( delAch , 1 );
      setdelAch(-1);
      setAch(Ach);
      let s = state;
      s.pubs.ach = Ach;
      func(s);
    }
    
  },[ delAch , addAch ])


  const [addSpz, setaddSpz ] = useState(-1);
  const [ spzlist , setSpz]  = useState(state.pubs.spz);
  const [ delSpz , setdelSpz ] = useState( -1 );
  
  
  const handleChangeSpz = ( index , e  ) => {
    var vals = [...spzlist];
    vals[index] = e.target.value;
    setSpz(vals);
    let s = state;
    s.pubs.spz = vals;
    func(s);
  }
  
  useEffect(() =>{
    if ( Number(addSpz) !== -1) {
      let es = spzlist;
      es.push("");
      setSpz(es);
      let s = state;
      s.pubs.spz = es;
      func(s);
      setaddSpz(-1);
    }
    if ( delSpz !== -1 ){
      let Spz = spzlist;
      Spz.splice( delSpz , 1 );
      setdelSpz(-1);

      setSpz(Spz);
      let s = state;
      s.pubs.spz = Spz;
      func(s);
    }
    
  },[ delSpz , addSpz ])
  
  
   
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Academic details and Publications
      </Typography>
      <Grid container spacing={3}>
      <Typography variant="h6" gutterBottom className="py-3 px-3">
        add education details ( Press the + icon to add )
      </Typography>
      <Grid item xs={11} >
        <label htmlFor="addEdu education">
            <Fab color="primary" size="small" component="span" aria-label="addEdu">
                <AddIcon onClick={() => setaddEdu(1) }/>
            </Fab>
        </label>
          { 
            edulist.length!==0?
          edulist.map( ( ele,  index ) => (
            <div className="d-flex py-2" key={index}>
            <TextField
            
              key = { index } 
              id={ Date.now().toString() + (Math.random( 100 )*100).toString() }
              name={"education"}
              value={ele}
              label={`Education ${index+1} detail`}
              fullWidth
              variant="outlined"
              onChange ={ (e) => handleChangeEdu( index , e ) }
            />
            <button className="btn btn-danger" onClick={() => setdelEdu(index) } >X</button></div>
          )) :
          <div />
          }
      </Grid>
      <Typography variant="h6" gutterBottom className="py-3 px-3">
        add Project/Paper details - (multi-line ) ( Press the + icon to add )
      </Typography>
      <Grid item xs={11} >
        <label htmlFor="addProj project">
            <Fab color="primary" size="small" component="span" aria-label="addProj">
                <AddIcon onClick={() => setaddProj(1) }/>
            </Fab>
        </label>
          { 
            projlist.length!==0?
          projlist.map( ( ele,  index ) => (
            <div className="d-flex py-2" key={index}>
            <TextField
            
              key = { index } 
              id={ Date.now().toString() + (Math.random( 100 )*100).toString() }
              name={"Project"}
              value={ele}
              label={`Project ${index+1} detail`}
              fullWidth
              multiline={true}
              variant="outlined"
              onChange ={ (e) => handleChangeProj( index , e ) }
            />
            <button className="btn btn-danger" onClick={() => setdelProj(index) } >X</button></div>
          )) :
          <div />
          }
      </Grid>


      <Typography variant="h6" gutterBottom className="py-3 px-3">
        add Specializations ( Press the + icon to add )
      </Typography>
      <Grid item xs={11} >
        <label htmlFor="Specializations">
            <Fab color="primary" size="small" component="span" aria-label="addSpz">
                <AddIcon onClick={() => setaddSpz(1) }/>
            </Fab>
        </label>
          { 
            spzlist.length!==0?
          spzlist.map( ( ele,  index ) => (
            <div className="d-flex py-2" key={index}>
            <TextField
          
              key = { index } 
              id={ Date.now().toString() + (Math.random( 100 )*100).toString() }
              name={"Spzect"}
              value={ele}
              label={`Specialization ${index+1} detail`}
              fullWidth
              variant="outlined"
              onChange ={ (e) => handleChangeSpz( index , e ) }
            />
            <button className="btn btn-danger" onClick={() => setdelSpz(index) } >X</button></div>
          )) :
          <div />
          }
      </Grid>


      <Typography variant="h6" gutterBottom className="py-3 px-3">
        add Achievements ( Press the + icon to add )
      </Typography>
      <Grid item xs={11} >
        <label htmlFor="Achivements">
            <Fab color="primary" size="small" component="span" aria-label="addSpz">
                <AddIcon onClick={() => setaddAch(1) }/>
            </Fab>
        </label>
          { 
            achlist.length!==0?
          achlist.map( ( ele,  index ) => (
            <div className="d-flex py-2" key={index}>
            <TextField
          
              key = { index } 
              id={ Date.now().toString() + (Math.random( 100 )*100).toString() }
              name={"Achect"}
              value={ele}
              label={`Achievement ${index+1} detail`}
              fullWidth
              variant="outlined"
              onChange ={ (e) => handleChangeAch( index , e ) }
            />
            <button className="btn btn-danger" onClick={() => setdelAch(index) } >X</button></div>
          )) :
          <div />
          }
      </Grid>


      </Grid>
    </React.Fragment>
  );
}
