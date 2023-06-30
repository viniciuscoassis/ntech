interface InfoCardProps {
  title: string,

}
const InfraOption = (  {title} : InfoCardProps) => {
    return (<>
    <option>
        {title}
    </option>
    </>)
}

export default InfraOption