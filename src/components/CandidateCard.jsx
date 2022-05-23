import styles from "./CandidateCard.module.css";

function CandidateCard({item}) {
  return (
    <div data-testid="candidate-container" className={styles.container}>
      <img src={item.avatar} alt="logo" width="100px" height="100px" />
      <div>
        <div>Name: {item.name}</div>
        <div>{item.title} & {item.company_name}</div>
      </div>
      <div>${item.salary}</div>
    </div>
  );
}

export default CandidateCard;
