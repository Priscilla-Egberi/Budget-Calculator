import React from 'react'
import {MdSend} from "react-icons/md"

export default function ExpenseForm() {
  return (
    <form>
        <div className="form-center">
            <div className="form-group">
                <label htmlFor="charge">charge</label>
                <input className='form-control' type="text" id="charge" name="charge" placeholder="e.g. rent" />
            </div>
            <div className="form-group">
                <label htmlFor="amount">amount</label>
                <input className='form-control' type="text" id="amount" name="amount" placeholder="e.g. 100" />
            </div>
        </div>
        <button type="submit" className='btn'>submit<MdSend className="btn-icon" /></button>
    </form>
  )
}
