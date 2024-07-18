import { Box, Button, Card, InputBase,  Typography } from '@mui/material'
import { ArrowDropDown,  ArrowRightAlt, CheckCircle, DesktopMac, Done, East, GppGood, KeyboardArrowDown, Palette, Person2, Send, SettingsSuggest, ViewComfy, West } from '@mui/icons-material'
import { styles } from './HomePageStyles'
import NavBar from '../navBar/NavBar'

function HomePage() {
  return (
    <Box sx={styles.bgContainer}>
        <NavBar />
        <Box sx={styles.bannerContainer}>
            <Box sx={styles.bannerContentContainer}>
                <Typography variant='h2' sx={styles.bannerHeading}>More than just sharing & storing</Typography>
                <Typography sx={styles.bannerDescription}>File storage made easy - including powerful features your won't find anywhere else. Wheather you're.</Typography>
                <Box sx={styles.buttonPlayContianer}>
                    <Button sx={styles.bannerButton}>Get Started</Button>
                    <Box sx={styles.playButton}><ArrowDropDown/></Box>
                    <Typography>Watch Video</Typography>
                </Box>                
            </Box>
            <Box component={'img'} src={'/image 1.png'} alt='image' sx={styles.bannerImg}/>
        </Box>

        <Box sx={styles.contentContainer}>

            <Box sx={styles.unleashContainer}>
                <Box sx={styles.unleashContentContainer}>
                <Typography variant='h2' sx={styles.unleashHeading}>Unleash the power of latest technologies.</Typography>
                <Typography sx={styles.bannerDescription}>File storage made easy - including powerful features your won't find anywhere else. Wheather you're.</Typography>
                </Box>
                <Button sx={styles.showAllButton}>Show All <ArrowRightAlt/></Button>
            </Box>

            <Box sx={styles.cardsContainer}>
                <Card sx={styles.featuresCard}>
                    <Box sx={{...styles.cardIconContainer, ...styles.card1IconContainer}}>
                        <GppGood sx={styles.card1Icon}/>
                    </Box>
                    <Box>
                        <Typography variant='h5' sx={styles.cardHeading}>Features you find</Typography>
                        <Typography>File storage made easy including powerful features you.</Typography>
                    </Box>
                </Card>

                <Box sx={{...styles.featuresCard, ...styles.middleCard}}>
                    <Box sx={{...styles.cardIconContainer, ...styles.card2IconContainer}}>
                        <Person2 sx={styles.card2Icon}/>
                    </Box>
                    <Box>
                        <Typography variant='h5' sx={styles.cardHeading}>Prioritize every task</Typography>
                        <Typography>We guid and support you along your journey of loss. Giving you the tools to navigate...</Typography>
                    </Box>
                </Box>

                <Card sx={styles.featuresCard}>
                    <Box sx={{...styles.cardIconContainer, ...styles.card3IconContainer}}>
                        <DesktopMac sx={styles.card3Icon}/>
                    </Box>
                    <Box>
                        <Typography variant='h5' sx={styles.cardHeading}>Software Developers</Typography>
                        <Typography>Beskin was created by a learn of software developers, estate designers and exports.</Typography>
                    </Box>
                </Card>
            </Box>

            <Box sx={styles.cloudContainer}>
                <Box component={'img'} src='/image 2.png' alt='cloud storage' sx={styles.cloudImg}/>
                <Box sx={styles.cloudContentContainer}>
                    <Typography sx={styles.cloudHighLights}>PLAN HIGHLIGHTS</Typography>
                    <Typography variant='h1' sx={styles.cloudHeading}>Manage your cloud profile the way want</Typography>
                    <Typography sx={styles.cloudDescription}>Submit your custom project request to our pool of 70+ shapify experts. Your request will get claimed in minutes.</Typography>
                    <Box sx={styles.listContainer}>
                        <Box sx={styles.listItem}>
                            <CheckCircle sx={styles.checkedIcon}/>
                            <Box component={'span'}>Satisfaction Guranteed</Box>
                        </Box>
                        <Box sx={styles.listItem}>
                            <CheckCircle sx={styles.checkedIcon}/>
                            <Box component={'span'}>Fair pricing</Box>
                        </Box>
                        <Box sx={styles.listItem}>
                            <CheckCircle sx={styles.checkedIcon}/>
                            <Box component={'span'}>Fast turnaround</Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box sx={styles.cloudContainer}>                
                <Box sx={styles.cloudContentContainer}>                    
                    <Typography variant='h1' sx={styles.cloudHeading}>Clients belives that cloud security</Typography>
                    <Typography sx={styles.cloudDescription}>
                        In computing a trusted client is a device or program controled by the use of the service, 
                        but with restrictions designed to prevent its use in ways not authorized by the provider of the service.
                    </Typography>                    
                </Box>
                <Box component={'img'} src='/image 3.png' alt='clients' sx={styles.clientBeliveImg}/>
            </Box>

            <Box sx={styles.clientsContainer}>
                <Box sx={styles.clientHeaders}>
                    <Typography variant='h1' sx={styles.clientsHeading}>Our Clients</Typography>
                    <Typography>File storage made easy - including powerful features</Typography>
                </Box>
                <Box sx={styles.brandsContainer}>
                    <Box sx={styles.brandCard}>
                        <Box component={'img'} src={'/falcon-logo.svg'} alt='falcon' sx={styles.brandLogo} />
                    </Box>
                    <Box sx={styles.brandsCol}>
                        <Box sx={styles.brandCard}>
                            <Box component={'img'} src={'/airbnb.png'} alt='airbnb' sx={styles.brandLogo} />
                        </Box>
                        <Box sx={styles.brandCard}>
                            <Box component={'img'} src={'/logitech.png'} alt='logitech' sx={styles.brandLogo} />
                        </Box>
                    </Box>

                    <Box sx={styles.brandsCol}>
                        <Box sx={styles.brandCard}>
                            <Box component={'img'} src={'/dropbox.png'} alt='dropbox' sx={styles.brandLogo} />
                        </Box>
                        <Box sx={styles.brandCard}>
                            <Box component={'img'} src={'/arista.png'} alt='arista' sx={styles.brandLogo} />
                        </Box>
                        <Box sx={styles.brandCard}>
                            <Box component={'img'} src={'/bitcoin.png'} alt='bitcoin' sx={styles.brandLogo} />
                        </Box>
                    </Box>

                    <Box sx={styles.brandsCol}>
                        <Box sx={styles.brandCard}>
                            <Box component={'img'} src={'/fedex.png'} alt='fedex' sx={styles.brandLogo} />
                        </Box>
                        <Box sx={styles.brandCard}>
                            <Box component={'img'} src={'/abin.png'} alt='abin' sx={styles.brandLogo} />
                        </Box>
                    </Box>
                    <Box sx={styles.brandCard}>
                        <Box component={'img'} src={'/junipur.png'} alt='junipur' sx={styles.brandLogo} />
                    </Box>
                    
                </Box>
            </Box>

            <Box sx={styles.backupContainer}>
                <Box sx={styles.backupContent}>
                    <Typography variant='h2'>The perfect back-up partners</Typography>
                    <Typography sx={styles.backupDescription}>In computing a trusted client is a device or program controled by the use of the service, 
                        but with restrictions designed</Typography>
                </Box>
                <Box component={'img'} src='/image 5.png' alt='back-up' sx={styles.backupImg}/>
            </Box>

            <Box sx={styles.pricingContainer}>
                <Box sx={styles.pricingHeaders}>
                    <Typography variant='h1' sx={styles.clientsHeading}>Pricing</Typography>
                    <Typography>The best cloud services in the world</Typography>
                </Box>
                <Box sx={styles.pricingCardsContainer}>
                    <Card sx={styles.pricingCard}>
                        <Typography variant='h4'>Free</Typography>
                        <Typography variant='h1'>
                            <Box component={'sup'} sx={styles.doller}>$</Box>
                            <Box component={'span'}>0</Box>
                            <Box component={'sub'} sx={styles.monthly}>/m</Box>
                        </Typography>
                        <Typography>Round the clock storage</Typography>
                        <Button sx={styles.freeSignUpButton}>Sign Up</Button>
                        <Box sx={styles.priceCardListContainer}>
                            <Box sx={styles.priceListItems}>
                                <Done sx={styles.tickIcon}/>
                                <Typography>5 Computer</Typography>
                            </Box>
                            <Box sx={styles.priceListItems}>
                                <Done sx={styles.tickIcon}/>
                                <Typography>5 Users</Typography>
                            </Box>
                            <Box sx={styles.priceListItems}>
                                <Done sx={styles.tickIcon}/>
                                <Typography>P Server</Typography>
                            </Box>                                                       
                        </Box>
                    </Card>

                    <Card sx={styles.pricingCard}>
                        <Typography variant='h4'>Personal Cloud</Typography>
                        <Typography variant='h1'>
                            <Box component={'sup'} sx={styles.doller}>$</Box>
                            <Box component={'span'}>10.00</Box>
                            <Box component={'sub'} sx={styles.monthly}>/m</Box>
                        </Typography>
                        <Typography>No hidden charges</Typography>
                        <Button sx={styles.personalSignUpButton} variant='contained'>Sign Up</Button>
                        <Box sx={styles.priceCardListContainer}>
                            <Box sx={styles.priceListItems}>
                                <Done sx={styles.tickIcon}/>
                                <Typography>15 Computer</Typography>
                            </Box>
                            <Box sx={styles.priceListItems}>
                                <Done sx={styles.tickIcon}/>
                                <Typography>Unlimited Users</Typography>
                            </Box>
                            <Box sx={styles.priceListItems}>
                                <Done sx={styles.tickIcon}/>
                                <Typography>Multiple Server</Typography>
                            </Box>   
                            <Box sx={styles.priceListItems}>
                                <Done sx={styles.tickIcon}/>
                                <Typography>1TB Storage</Typography>
                            </Box>                         
                        </Box>
                    </Card>
                </Box>
            </Box>

            <Box sx={styles.happyClient}>
                <Box sx={styles.happyClientHeaders}>
                    <Typography variant='h1' sx={styles.happyClientHeading}>What our happy client say</Typography>
                    <Typography>File storage made easy - including powerful features your won't find anywhere else. Wheather you're.</Typography>
                </Box>
                <Box sx={styles.clientContent}>
                    <Box component={'img'} src='/image 4.png' alt='client' sx={styles.clientImg}/>
                    <Box sx={styles.clientReviewContainer}>
                        <Box component={'img'} src='/logo2.png' alt='benik' sx={styles.clientLogo}/>
                        <Typography sx={styles.clientDescription}>File storage made easy - including powerful features your won't find anywhere else. Wheather you're.</Typography>
                        <Box>
                            <Typography sx={styles.clientName} variant='h6'>Larry Diamond</Typography>
                            <Box component={'span'} sx={styles.clientRole}>Chief executive officer, Benik</Box>
                        </Box>
                        <Box sx={styles.prevNextReviews}>
                            <Box sx={styles.prevNextBtn}><West  sx={styles.prevNextIcons}/> </Box>
                            <Box sx={styles.prevNextBtn}><East sx={styles.prevNextIcons}/></Box>
                        </Box>
                    </Box>
                </Box>
            </Box> 

            <Box sx={styles.ourBlog}>
                <Box sx={styles.ourBlogHeaders}>
                    <Typography variant='h1' sx={styles.ourBlogHeading}>Our Blog</Typography>
                    <Typography>File storage made easy - including powerful features your won't find anywhere else. Wheather you're.</Typography>
                </Box>
                <Box sx={styles.blogCardsContainer}>
                    <Box sx={styles.eachCardContent}>
                        <Card sx={{...styles.blogCard, ...styles.blogCard1}}>
                            <Box component={'img'} src='/blog1.png' alt='blog1' />
                        </Card>
                        <Box>
                            <Button sx={{...styles.blogButton, ...styles.blogButton1}}>Closed</Button>
                            <Button  sx={{...styles.blogButton, ...styles.blogButton1}}>App Development</Button>
                        </Box>
                        <Typography sx={styles.blogItemNote}>No Worry about losing files </Typography>
                    </Box>

                    <Box sx={styles.eachCardContent}>
                        <Card sx={{...styles.blogCard, ...styles.blogCard2}}>
                            <Box component={'img'} src='/blog2.png' alt='blog2' />
                        </Card>
                        <Box>
                            <Button sx={{...styles.blogButton, ...styles.blogButton2}}>Start</Button>                            
                        </Box>
                        <Typography sx={styles.blogItemNote}>Do more with less cost</Typography>
                    </Box>

                    <Box sx={styles.eachCardContent}>
                        <Card sx={{...styles.blogCard, ...styles.blogCard3}}>
                            <Box component={'img'} src='/blog3.png' alt='blog2' />
                        </Card>
                        <Box>
                            <Button sx={{...styles.blogButton, ...styles.blogButton3}}>Bussiness</Button>                            
                        </Box>
                        <Typography sx={styles.blogItemNote}>Get a good thing in a life</Typography>
                    </Box>
                </Box>
            </Box> 

            <Box sx={styles.faqsContainer}>
                <Box sx={styles.faqsHeaders}>
                    <Typography variant='h2' sx={styles.faqsHeading}>Frequently asked questions</Typography>
                    <Typography>Get the best service at the lowest price</Typography>
                </Box>
                <Box sx={styles.firstQuestion}>
                    <Box sx={styles.first}>
                        <Typography variant='h6'>How does website version control work?</Typography>
                        <KeyboardArrowDown />
                    </Box>
                    <Typography sx={styles.backupDescription}>A cloud of witness that hover over the cloud. Take your business to a whole new.</Typography>
                </Box>
                <Card sx={styles.faqsQuestions}>
                    <Typography variant='h6'>Can I use this without an extension?</Typography>
                    <KeyboardArrowDown />
                </Card>
                <Card sx={styles.faqsQuestions}>
                    <Typography variant='h6'>Why is this batter than usePastel?</Typography>
                    <KeyboardArrowDown />
                </Card>
                <Card sx={styles.faqsQuestions}>
                    <Typography variant='h6'>How can I integrate with git hub?</Typography>
                    <KeyboardArrowDown />
                </Card>                
            </Box>

            <Box sx={styles.sharingStoring}>
                <Box sx={styles.sharingHeaders}>
                    <Typography variant='h2' sx={{...styles.bannerHeading, ...styles.sharingHeading}}>More than just sharing & storing</Typography>
                    <Typography sx={styles.bannerDescription}>File storage made easy - including powerful features your won't find anywhere else. Wheather you're.</Typography>
                </Box>     
                <Box sx={styles.buttonPlayContianer}>
                    <Button sx={styles.bannerButton}>Get Started</Button>
                    <Box sx={styles.playButton}><ArrowDropDown/></Box>
                    <Typography>Watch Video</Typography>
                </Box>
            </Box>

            <Box sx={styles.unleashContainer}>
                <Box sx={styles.unleashContentContainer}>
                <Typography variant='h2' sx={styles.unleashHeading}>Unlimited transformati powered by the faster</Typography>
                <Typography sx={styles.bannerDescription}>File storage made easy - including powerful features your won't find anywhere else. Wheather you're.</Typography>
                </Box>
                <Button sx={styles.showAllButton}>Show All <ArrowRightAlt/></Button>
            </Box>

            <Box sx={styles.cardsContainer}>
                <Card sx={{...styles.featuresCard, ...styles.unlimitedCard1}}>
                    <Box sx={{...styles.cardIconContainer, ...styles.unlimitedCard1IconContainer}}>
                        <SettingsSuggest />
                    </Box>
                    <Box>
                        <Typography variant='h5' sx={styles.cardHeading}>Features you find</Typography>
                        <Typography>Hearts even reached pleasure with does homeless. steps was a extent more...</Typography>
                    </Box>
                </Card>

                <Box sx={{...styles.featuresCard, ...styles.unlimitedCard2}}>
                    <Box sx={{...styles.cardIconContainer, ...styles.unlimitedCard2IconContainer}}>
                        <ViewComfy />
                    </Box>
                    <Box>
                        <Typography variant='h5' sx={styles.cardHeading}>Fully Responsive</Typography>
                        <Typography>We guide and support you along your journey of loss. giving you the tools to navigate...</Typography>
                    </Box>
                </Box>

                <Card sx={{...styles.featuresCard, ...styles.unlimitedCard3}}>
                    <Box sx={{...styles.cardIconContainer, ...styles.unlimitedCard3IconContainer}}>
                        <Palette/>
                    </Box>
                    <Box>
                        <Typography variant='h5' sx={styles.cardHeading}>Easy color change</Typography>
                        <Typography>Ping color replacer worlds simplest ping tool. World's simplest online portal network Graphics.</Typography>
                    </Box>
                </Card>
            </Box>

            <Box sx={styles.talkToUsContainer}>
                <Typography variant='h2' sx={styles.talkHeading}>Ready to get started? Talk to us today</Typography>
                <Button sx={styles.bannerButton}>Get Started</Button>
            </Box>

            <Box sx={styles.footerContainer}>
                <Box sx={styles.besinkProfile}>
                    <Box component={'img'} src='/logo.png' alt='logo' sx={styles.companyLogo}/>
                    <Box>
                        <Typography sx={styles.contact}>CONTACT</Typography>
                        <Typography variant='h6'>hellobesink@gmail.com</Typography>
                    </Box>
                </Box>
                <Box sx={styles.footerContentContainer}>
                    <Box sx={styles.navigatorContainer}>
                        <Typography variant='h6'>Navigation</Typography>
                        <Typography sx={styles.footerItems}>Cloud-X</Typography>
                        <Typography sx={styles.footerItems}>Coder tools</Typography>
                        <Typography sx={styles.footerItems}>Upgrade plan</Typography>
                        <Typography sx={styles.footerItems}>Claims</Typography>
                    </Box>
                    <Box sx={styles.navigatorContainer}>
                        <Typography variant='h6'>Resources</Typography>
                        <Typography sx={styles.footerItems}>Blog</Typography>
                        <Typography sx={styles.footerItems}>News updates</Typography>                        
                    </Box>
                    <Box sx={styles.navigatorContainer}>
                        <Typography variant='h6'>Stay up to date</Typography>
                        <Typography sx={styles.footerItems}>Stay informed on new you can make a difference</Typography>
                        <Box sx={styles.inputContainer}>
                            <InputBase type='text' placeholder='Your email address'/>
                            <Box sx={styles.sendContainer}><Send/></Box>
                        </Box>                  
                    </Box>
                </Box>
            </Box>
            <Box sx={styles.copyRightContainer}>
                <Typography sx={styles.copyRight}>@2021 All Right's Reserved - Besnik Agency</Typography>
            </Box>
        </Box>
    </Box>
  )
}

export default HomePage