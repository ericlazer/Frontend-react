export default ({
  options = {
    parentClasses: '',
  }, 
  percent = 0
}) => {
  return (
    <div className={`${'flex-auto relative min-w-[200px] h-[6px] mt-[6px] rounded-sm ' + options.parentClasses}`}>
      <div className={`${`absolute w-[${percent}%] h-full rounded-sm top-0 left-0 ` + options.childClasses}`}></div>
    </div>
  )
}