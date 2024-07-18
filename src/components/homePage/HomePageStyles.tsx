export const styles = {
    bgContainer:{
        padding: '10px 40px',
        display:'flex',
        flexDirection: 'column',
        gap:3,
        backgroundColor:'#fdfdfd',
    },
    bannerContainer:{
        backgroundColor:'#ecf9ff',
        borderRadius:'10px',
        display:'flex',
        flexDirection: {xs: 'column', md:'row'},
        alignItems: 'center',
        gap:2,
        padding:'10px',
    },
    bannerContentContainer:{
        display:'flex',
        flexDirection: 'column',
        alignItems: {xs:'center', md:'flex-start'},
        padding:'20px 40px',
        gap:4,
        fontFamily:'Helvetica',
        width:{xs:'100%', md:'50%'},
    },
    bannerHeading:{
        color:'#001439',
        fontWeight:'bold',
        fontSize:{xs:'30px', sm:'40px', md:'50px'},
        textAlign:{xs:'center', md:'left'},
    },
    bannerDescription:{
        width:'80%',
        color:'#001439',
        fontSize: {xs:'18px', sm:'20px'},
        textAlign:{xs:'center', md:'left'},
    },
    bannerButton:{
        color:'#fff',
        backgroundColor:'#001439',
        textTransform: 'capitalize',
        padding:'13px',
        width:'130px',
    },
    buttonPlayContianer:{
        display:'flex',
        flexDirection: {xs:'column', md:'row'},
        alignItems: 'center',
        gap:3,
        color:'#001439',
    },
    playButton:{
        backgroundColor:'#fff',
        borderRadius:'50px',
        color:'#001439',
        width:'50px',
        height:'50px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',

    },
    bannerImg:{
        alignSelf:{xs:'center', md:'flex-end'},
        height:{xs:'50%', md:'70%'},
        width:{xs:'100%', md:'50%'}
    },
    contentContainer:{
        padding:'10px 30px',
        display:'flex',
        flexDirection:'column',
        gap:10,
        marginTop:'25px',
    },
    unleashContainer:{
        display:'flex',
        flexDirection:{xs:'column', md:'row'},
        justifyContent: {xs:'center', md:'space-between'},
        textAlign:{xs:'center', md:'left'},
        gap:{xs:5, md:2}
    },
    unleashContentContainer:{
        width:{xs:'100%', md:'50%'},
        display:'flex',
        flexDirection:'column',
        gap:2
    },
    unleashHeading:{
        color:'#2f3a54',
        fontSize:{xs:'30px', sm:'40px', md:'50px'},
        fontWeight:'bold',
    },
    showAllButton:{
        textTransform:'capitalize',
        color:'#2f3a54',
        alignSelf:{xs:'center', md:'flex-end'},
    },
    cardsContainer:{
        display:'flex',
        justifyContent: 'space-between',
        flexDirection:{xs:'column', md:'row'},
        gap: 5,
        alignItems: 'center',
    },
    featuresCard:{
        borderRadius:'15px',
        padding:'30px',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-around',
        gap:4,
        width:{xs:'100%', md: '250px'},
        height:{xs:'100%', md: '250px'},
    },
    cardIconContainer:{        
        height:'60px',
        width:'60px',
        borderRadius:'50px',
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card1IconContainer:{
        backgroundColor:'#ebf9fd',
    },
    card1Icon:{
        color:'#00c4fe',
    },
    card2IconContainer:{
        backgroundColor:'#fee8dd',
    },
    card2Icon:{
        color:'#fd8f4f',
    },
    card3IconContainer:{
        backgroundColor:'#eae4fe',
    },
    card3Icon:{
        color:'#a783ff',
    },
    cardHeading:{
        fontWeight:'bold',
    },
    middleCard:{
        boxShadow:'0 2px 10px -10px black'
    },
    cloudContainer:{
        display:'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection:{xs: 'column', md:'row'},
        
    },
    cloudImg:{
        height:{xs:'250px', md:'500px'},
        alignSelf: 'center',
    },
    cloudContentContainer:{
        display:'flex',
        flexDirection:'column',
        gap:3,
        width:{xs:'100%', md:'40%'},
    },
    cloudHighLights:{
        color:'#a787ff',
        letterSpacing:'10px',
    },
    cloudHeading:{
        fontSize:{xs:'30px', sm:'40px', md:'50px'},
        fontWeight:'bold',
        color:'#2d3856',
    },
    cloudDescription:{
        width:'80%',
    },
    listContainer:{
        display:'flex',
        flexDirection:'column',
        gap:2
    },
    listItem:{
        display:'flex',
        alignItems: 'center',
        gap:1
    },
    checkedIcon:{
        color:'#a787ff',
        fontSize:'18px',
    },
    clientBeliveImg:{
        height:{xs:'300px', md:'500px'},
    },
    clientsContainer:{
        display:'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap:5
    },
    clientHeaders:{
        textAlign:'center',
        display:'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    clientsHeading:{
        fontWeight:'bold',
        fontSize:{xs:'30px', sm:'50px', md:'60px'},
        color:'#2d3856',
    },
    brandsContainer:{
        display:'flex',
        flexDirection:{xs:'column', md:'row'},
        alignItems: 'center',
        justifyContent: 'center',
        gap:3
    },
    brandCard:{
        backgroundColor:'#fff',
        borderRadius:'10px',
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow:'0 2px 4px -4px black',
        padding:'10px',
        height:'50px',
        width:{xs:'100px', md:'150px'},
    },
    brandLogo:{
        height:'60px',
        width:'60px',
    },
    brandsCol:{
        display:'flex',
        flexDirection:'column',
        gap:3
    },
    backupContainer:{
        backgroundColor:'#02c3fe',
        borderRadius:'20px',
        padding:'40px',
        color:'#fff',
        display:'flex',
        flexDirection:{xs:'column', md:'row'},
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    backupContent:{
        display:'flex',
        flexDirection:'column',
        width:'50%',
    },
    backupDescription:{
        color:'#54d9f7',
    },
    backupImg:{
        display:{xs: 'none', sm: 'inline'},
    },
    pricingContainer:{
        display:'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap:5
    },
    pricingHeaders:{
        display:'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pricingCardsContainer:{
        display:'flex',
        flexDirection:{xs:'column', md:'row'},
        gap:4
    },
    pricingCard:{
        display:'flex',
        flexDirection:'column',
        justifyContent: {xs:'flex-start', md:'center'},
        alignItems:'center',
        padding:'30px',
        gap:3,
        width:{xs:'90%', md:'400px'},
        borderRadius:'20px',
    },
    doller:{
        fontSize:{xs:'30px', md:'50px'},
        fontweight:'bold',
    },
    monthly:{
        fontSize:{xs:'30px', md:'50px'},
        fontweight:'bold',
    },
    freeSignUpButton:{
        backgroundColor:'#ebf9fd',
        textTransform:'capitalize',
        alignSelf:'stretch',
    },
    priceCardListContainer:{
        display:'flex',
        flexDirection:'column',
        gap:2,
        alignSelf:'flex-start',
        height:'150px',
    },
    priceListItems:{
        display:'flex',
        alignItems: 'center',
        gap:1
    },
    tickIcon:{
        color:'#02c3fe',
    },
    personalSignUpButton:{
        textTransform:'capitalize',
        backgroundColor:'#02c3fe',
        color:'#fff',
        alignSelf:'stretch',    
    },
    happyClient:{
        display: 'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent: 'center',
        gap:10,
        backgroundColor:'#ecf9ff',
        borderRadius:'20px',
        padding:'30px',
    },
    happyClientHeaders:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent: 'center',
        gap:2,       
        width:'40%',
        textAlign:'center',
    },
    happyClientHeading:{
        fontSize:{xs:'30px', sm:'50px', md:'60px'},
        fontWeight:'bold',
    },
    clientContent:{
        display:'flex',
        flexDirection:{xs:'column', md:'row'},
        gap:10
    },
    clientImg:{
        height:'320px',
        width:{xs:'100%', md:'50%'},
    },
    clientReviewContainer:{
        display:'flex',
        flexDirection:'column',
        gap:3
    },
    clientLogo:{
        height:'80px',
        width:'150px',
    },
    clientDescription:{
        width:'300px',
        fontStyle:'italic',
    },
    clientName:{
        color:'#233041',
    },
    clientRole:{
        color:'#afbdc5'
    },
    prevNextReviews:{
        display:'flex',
        gap:1
    },
    prevNextBtn:{
        backgroundColor:'#fff',
        height:'30px',
        width:'30px',
        padding:'5px',
        borderRadius:'50px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    prevNextIcons:{
        fontSize:'15px',
    },

    ourBlog:{
        display:'flex',
        flexDirection:'column',
        gap:5,
        borderBottom:'1px solid #c8c8c8',
        paddingBottom:'50px',
        width:'100%',
    },

    ourBlogHeaders:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
    },
    ourBlogHeading:{
        fontSize:{xs:'30px', sm:'50px', md:'60px'},
        fontWeight:'bold',
    },
    blogCardsContainer:{
        display:'flex',
        flexDirection:{xs:'column', md:'row'},
        alignItems:'center', 
        justifyContent:{xs:'center', md:'stretch'},
        gap:5,
    },
    eachCardContent:{
        display:'flex',
        flexDirection:'column',
        gap:2
    },
    blogCard:{
        padding:'30px',
        width: {xs:'150px', sm:'200px', md:'370px',},
        alignSelf:'stretch',
        height:'100px',
        borderRadius:'10px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    blogCard1:{
        backgroundColor:'#f0ebff',
    },
    blogCard2:{
        backgroundColor:'#fef5e6',
    },
    blogCard3:{
        backgroundColor:'#ecf9ff',
    },
    blogButton:{
        backgroundColor:'#fff',
        textTransform:'capitalize',        
    },
    blogButton1:{
        color:'#a787ff',
    },
    blogButton2:{
        color:'#fd8f4f',
    },
    blogButton3:{
        color:'#02c3fe',
    },
    blogItemNote:{
        color:'#132037',
        fontWeight:'bold',
    },
    faqsContainer:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center',
        gap:4
    },
    faqsHeaders:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center',
    },
    faqsHeading:{
        fontSize:{xs:'30px', sm:'50px', md:'60px'},
        fontWeight:'bold',
    },
    firstQuestion:{
        backgroundColor:'#02c3fe',
        padding:'20px' ,
        color:'#fff',
        borderRadius:'20px',
        width:{xs: '100%', md:'600px'},
    },
    first:{
        display: 'flex',
        alignItems: 'center',
        justifyContent:'space-between',
    },
    faqsQuestions:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        padding:'20px',
        width:{xs: '100%', md:'600px'},
    },
    sharingStoring:{
        alignSelf:'stretch',
        backgroundColor:'#ecf9ff',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
        gap: 5,
        padding:'50px',
        borderRadius:'20px',
    },
    sharingHeaders:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
        gap:3,
        width:'50%',
    },
    sharingHeading:{
        color:'#001439',
        fontWeight:'bold',
        fontSize:{xs:'30px', sm:'40px', md:'50px'},
        textAlign:'center',
    },
    unlimitedCard1:{
        backgroundColor:'#edfaff',

    },
    unlimitedCard2:{
        backgroundColor:'#fff0e9',

    },
    unlimitedCard3:{
        backgroundColor:'#f4edff',
    },
    unlimitedCard1IconContainer:{
        backgroundColor:'#01c3ff',
        color:'#fff',
    },
    unlimitedCard2IconContainer:{
        backgroundColor:'#ff8e4d',
        color:'#fff',
    },
    unlimitedCard3IconContainer:{
        backgroundColor:'#a783fd',
        color:'#fff',
    },
    talkToUsContainer:{
        display:'flex',
        flexDirection: {xs: 'column', md:'row'},
        justifyContent:'space-between',
        alignItems:'center',
    },
    talkHeading:{
        width:{xs:'90%', md:'45%'},
    },

    footerContainer:{
        display:'flex',
        flexDirection: {xs:'column', md:'row'},
        alignItems:'center',
        gap:{xs:2, md:20},
        justifyContent:'space-between',
        borderBottom: '1px solid #c8c8c8',
        paddingBottom:'50px',
    },
    besinkProfile:{
        display:'flex',
        flexDirection: 'column',
    },
    companyLogo:{
        width:'100px',
        height:'100px'
    },
    contact:{
        color:'#8b8783',
        letterSpacing:'10px',
    },
    footerContentContainer:{
        display:'flex',
        flexDirection: {xs:'column', md:'row'},
        gap:8
    },
    navigatorContainer:{
        display:'flex',
        flexDirection: 'column',
        gap:1
    },
    inputContainer:{
        border:'1px solid #c8c8c8',
        borderRadius:'50px',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:'15px',
        backgroundColor:'#f3fbfe',
    },
    sendContainer:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#01c3ff',
        color:'#000',
        height:'50px',
        width:'50px',
        borderRadius:'50px',
    },
    footerItems:{
        color:'#a8b1b6'
    },
    copyRightContainer:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    copyRight:{
        color:'#d7d9de',
    }

}