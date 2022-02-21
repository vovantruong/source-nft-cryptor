import React, { useState } from "react";
import cn from "classnames";
import styles from "./FolowSteps_Mutiple.module.sass";
import Icon from "../../../components/Icon";
import Loader from "../../../components/Loader";
import LoaderCircle from "../../../components/LoaderCircle";

const FolowSteps_Mutiple = ({ className }) => {
  const [deposit, setdeposit] = useState(false);
  const [approve, setapprove] = useState(false);
  const [signature, setsignature] = useState(false);
  const [failed, setfailed] = useState(false);
  const [oder, setoder] = useState(false);
  return (
    <div className={cn(className, styles.steps)}>
      <div className={cn("h4", styles.title)}>Folow steps</div>
      <div className={styles.list}>
        <div className={cn(styles.item, styles.done)}>
          <div className={styles.head}>
            <div className={styles.icon}>
              <Icon name="upload-file" size="24" />
            </div>
            <div className={styles.details}>
              <div className={styles.info}>Upload files & Mint token</div>
              <div className={styles.text}>Call contract method</div>
            </div>
          </div>
          <button  className={
              deposit
                ? cn("button disabled", styles.button)
                : cn("button", styles.button)
            }
            onClick={() => setdeposit(true)}>Done</button>
        </div>
        <div className={styles.item}>
          <div className={styles.head}>
          {approve ? (
              <div className={cn(styles.icon, styles.checkGreen)}>
                <Icon className={styles.checkIcon} name="check" size="24" />
              </div>
            ) : (
              <div className={styles.icon}>
                <Icon name="pencil" size="24" />
              </div>
            )}
            <div className={styles.details}>
              <div className={styles.info}>Sign sell order</div>
              <div className={styles.text}>
                Sign sell order using your wallet
              </div>
            </div>
          </div>
          {approve ? (
            <button
              className={
                deposit
                  ? cn("button disabled", styles.button)
                  : cn("button ", styles.button)
              }
              onClick={() => setapprove(true)}
            >
              Done
            </button>
          ) : (
            <button
              className={
                deposit
                  ? cn("button ", styles.button)
                  : cn("button disabled", styles.button)
              }
              onClick={() => setapprove(true)}
            >
              Start now
            </button>
          )}
        </div>
        <div className={styles.item}>
          <div className={styles.head}>
            <div className={styles.icon}>
              <LoaderCircle className={styles.loader} />
            </div>
            <div className={styles.details}>
              <div className={styles.info}>Sign sell order</div>
              <div className={styles.text}>
                Sign sell order using your wallet
              </div>
            </div>
          </div>
          {signature ? (
            <button
              className={
                deposit
                  ? cn("button disabled", styles.button)
                  : cn("button ", styles.button)
              }
              onClick={() => setsignature(true)}
            >
            </button>
          ) : (
            <button
              className={
                deposit
                  ? cn("button ", styles.button)
                  : cn("button disabled", styles.button)
              }
              onClick={() => setsignature(true)}
            >
            </button>
          )}
        </div>
        <div className={cn(styles.item, styles.error)}>
          <div className={styles.head}>
          {failed ? (
              <div className={cn(styles.icon, styles)}>
                <Icon className={styles} name="check" size="24" />
              </div>
            ) : (
              <div className={styles.icon}>
                <Icon name="pencil" size="24" />
              </div>
            )}
            <div className={styles.details}>
              <div className={styles.info}>Sign sell order</div>
              <div className={styles.text}>
                Sign sell order using your wallet
              </div>
            </div>
          </div>
          {failed ? (
            <button
              className={
                deposit
                  ? cn("button disabled", styles.button)
                  : cn("button ", styles.button)
              }
              onClick={() => setfailed(true)}
            >
              Done
            </button>
          ) : (
            <button
              className={
                deposit
                  ? cn("button ", styles.button)
                  : cn("button disabled", styles.button)
              }
              onClick={() => setfailed(true)}
            >
              Failed
            </button>
          )}
        </div>
        <div className={styles.item}>
          <div className={styles.head}>
          {oder ? (
              <div className={cn(styles.icon, styles.checkGreen)}>
                <Icon className={styles.checkIcon} name="check" size="24" />
              </div>
            ) : (
              <div className={styles.icon}>
                <Icon name="bag" size="24" />
              </div>
            )}
            <div className={styles.details}>
              <div className={styles.info}>Sign lock order</div>
              <div className={styles.text}>
                Sign lock order using your wallet
              </div>
            </div>
          </div>
          {oder ? (
            <button
              className={
                deposit
                  ? cn("button disabled", styles.button)
                  : cn("button ", styles.button)
              }
              onClick={() => setoder(true)}
            >
              Done
            </button>
          ) : (
            <button
              className={
                deposit
                  ? cn("button ", styles.button)
                  : cn("button disabled", styles.button)
              }
              onClick={() => setoder(true)}
            >
              Start now
            </button>
          )}
        </div>
      </div>
      <div className={styles.note}>
        Something went wrong, please{" "}
        <a href="/#" target="_blank" rel="noopener noreferrer">
          try again
        </a>
      </div>
    </div>
  );
};

export default FolowSteps_Mutiple;
