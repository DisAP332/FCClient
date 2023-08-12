import SLSBanner from '../../Global/Imgs/SLS_Banner.jpg'
import GDVS from '../../Global/Imgs/goDaddy.png'

const date = new Date()

export const Footer = () => {

    return (
        <>
            <div className="Footer flexCentered">
                <a href='https://www.swinglifestyle.com/' target='_blank'>
                <img src={SLSBanner} alt='SLS Banner' />
                </a>
                <h2>Copyright © French Connections {date.getFullYear()} - All Rights Reserved</h2>
                <a href='https://seal.godaddy.com/verifySeal?sealID=Qrp2XdhYt1dge8TzU0kBAcYlEWl8XBo1n1UBYCUhgseyM1OqITNKGBr1WXop'
                target='_blank'>
                    <img src={GDVS} alt='GoDaddy SLS' />
                </a>
            </div>
        </>
    )
}