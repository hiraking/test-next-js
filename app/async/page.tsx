'use client';
import { Accordion, AccordionDetails, AccordionSummary, Alert, Button, Checkbox, CircularProgress, Fade, FormControlLabel, FormGroup, Switch, TextField, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

export default function Home() {
  const [syncRunning, setSyncRunning] = useState(false);
  const [syncComplete, setSyncComplete] = useState(false);
  const [asyncRunning, setAsyncRunning] = useState(false);
  const [asyncComplete, setAsyncComplete] = useState(false);

  const handleClickAsync = async() => {
    setAsyncRunning(true)
    setAsyncComplete(false)
    setTimeout(() => {
      setAsyncRunning(false)
      setAsyncComplete(true)
    }, 5000)
  }

  const handleClickSync = () => {
    setSyncComplete(false)
    var start = new Date().getTime();
    while (true) {
      var current = new Date().getTime();
      if ((current - start) >= 5000) break;
    }
    setSyncRunning(false)
    setSyncComplete(true)
  }

  return (
    <main className='bg-gray-800'>
      <div className='flex content-around max-w-screen-md mx-auto h-screen '>
        <div className='h-full w-1/4'>
          <SideMenu />
        </div>
        <div className='h-full grid-cols-8 w-3/4'>
          
          <Part handleClick={handleClickAsync} isRunning={asyncRunning} isComplete={asyncComplete} setIsComplete={setAsyncComplete} async/>
          <Part handleClick={handleClickSync} isRunning={syncRunning} isComplete={syncComplete} setIsComplete={setSyncComplete}/>
        </div>
      </div>
    </main>

  )
}

const Part = (props: any) => {
  return (
    <div className='my-32 h-40'>
      <Button className="w-60 block mx-auto my-10 bg-blue-600" size="large" variant='contained' onClick={props.handleClick} >5秒かかる処理（{props.async ? '非同期' : '同期'}）</Button>
      {props.isRunning ? <CircularProgress className='block mx-auto'/> : props.isComplete ?
      <Alert severity='info' className='w-2/3 mx-auto text-blue-300' variant='outlined' onClose={() => {props.setIsComplete(false)}}>処理が終了しました。</Alert> : null}
    </div>
  )
}

const SideMenu = () => {
  return (
    <div className="my-28 text-blue-300">
      <FormGroup className='my-5'>
        <FormControlLabel control={<Switch defaultChecked color='warning'/>} label="スイッチ1" />
        <FormControlLabel control={<Switch defaultChecked color="warning"/>} label="スイッチ2"/>
      </FormGroup>
      <Accordion className="bg-slate-600 text-gray-200">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>メニュー1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography></Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="bg-slate-600 text-gray-200">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>メニュー2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography></Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="bg-slate-600 text-gray-200">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>メニュー3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography></Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
