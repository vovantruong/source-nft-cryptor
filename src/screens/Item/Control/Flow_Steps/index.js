import React, { useState } from "react";
import cn from "classnames";
import styles from "./Flow_Steps.module.sass";
import Icon from "../../../../components/Icon";
import LoaderCircle from "../../../../components/LoaderCircle";
import Modal from "../../../../components/Modal";
import SuccessfullyPurchased from "../SuccessfullyPurchased";

const Flow_Steps = ({ className }) => {
    const [visibleModalFlowSteps, setVisibleModalFlowSteps] = useState(false);
    const cancel = () => {
        document.querySelector("body").style = "";
        document.querySelector("#modal").style.display = "none";
      };
    return (
        <>
            <div className={cn(className, styles.flow_steps)}>
                <div className={cn("h4", styles.title)}>Follow steps</div>
                <div className={styles.line}>
                    <div className={styles.icon}>
                        <LoaderCircle className={styles.loader} />
                    </div>
                    <div className={styles.details}>
                        <div className={styles.subtitle}>Purchasing</div>
                        <div className={styles.text}>
                            Sending transaction with your wallet
                        </div>
                    </div>
                </div>
                <div className={styles.attention}>
                    <div className={styles.preview}>
                        <Icon name="info-circle" size="32" />
                    </div>
                    <div className={styles.details}>
                        <div className={styles.subtitle}>This creator is not verified</div>
                        <div className={styles.text}>Purchase this item at your own risk</div>
                    </div>
                    <div className={styles.avatar}>
                        <img src="/images/discover/icon-avatar-discover.svg" alt="Avatar" />
                    </div>
                </div>
                <div className={styles.btns}>
                    <button className={cn("button", styles.button)}
                        className={cn("button", styles.button)}
                        onClick={() => setVisibleModalFlowSteps(true)}
                    >
                        I understand, continue
                    </button>
                    <button className={cn("button-stroke", styles.button)} onClick={() => cancel()}>Cancel</button>
                </div>
            </div>
            <Modal
                visible={visibleModalFlowSteps}
                onClose={() => setVisibleModalFlowSteps(false)}
            >
                <SuccessfullyPurchased/>
            </Modal>
        </>
    );
};

export default Flow_Steps;
