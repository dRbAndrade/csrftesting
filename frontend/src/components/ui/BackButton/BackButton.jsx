import styles from "./BackButton.module.scss"
export const BackButton = () => {
    const test = (event) => {
    event.preventDefault();
    axios.get("http://ec2-100-26-175-97.compute-1.amazonaws.com:8080/categories").then(console.log)
    axios.post("http://ec2-100-26-175-97.compute-1.amazonaws.com:8080/login", {
      data: JSON.stringify({
        username: "mdaffonso@gmail.com",
        password: "Senha@123456"
      })
    }).then(console.log)

  }
  return (
    <>
      <input type="input" className={styles.BackButton} onClick={()=>test()}></input>
    </>
  )
}