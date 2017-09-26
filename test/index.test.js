it('exception promise', (done) => {
  setTimeout(()=>{
    expect(true).toEqual(false)
    done()
  }, 10)
})
