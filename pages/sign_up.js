const SignUp = () => {
  return (
    <div className='signUp'>
      <div className='signUp-title'>
        <h4>JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h4>
        <h6>Type your email down below and be young wild generation</h6>
      </div>
      <form>
        <input
          type='text'
          id='form'
          name='form'
          value='Add your email here'></input>
        <input className='submit' type='submit' value='Send' />
      </form>
    </div>
  )
}

export default SignUp
