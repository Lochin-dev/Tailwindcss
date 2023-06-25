export const styles = {
    paddingX: 'sm:px-16 px-6',
    paddingY: 'sm:py-16 py-6',
    padding: 'sm:px-16 px-6 sm:py-16 py-6',
    marginX: 'sm:mx-16 mx-6',
    marginY: 'sm:my-16 my-6',
    container: 'xl:max-w-[1280px] w-full',
    flexCenter: 'flex justify-center items-center',
    flexStart: 'flex justify-start items-start',
    flexBetween: 'justify-between items-center',
    pargraph: 'font-montserraf font-normal text-lightWhite text-[18px] loading-[30.8px]',
    heading1: 'font-montserraf font-semibold ss: text-[72px] text-[52px] text-white ss: loading-[100px] loading-[75]',
    heading2: 'font-montserraf font-semibold xs: text-[48px] text-[40px] text-white xs: loading-[76.8px] loading-[66.8px]'
}

export const layout = {
    section: `flex md:flex-row flex-col items-center ${styles.paddingY}`,
    sectionRevers: `flex md:flex-row flex-col-reverse items-center ${styles.paddingY}`,
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 relarive`,
    sectionImgReversa: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relarive`,
}