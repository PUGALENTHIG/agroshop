import { Button, Card, CardActions, CardContent, CardMedia, Rating, Skeleton, useMediaQuery } from '@mui/material';
import { Star } from '@mui/icons-material';

const ProductCard = ({ product }) => {
    const { img, name, price, reviews, reviewCount } = product;

    // Media Query
    const isMediumScreen = useMediaQuery('(min-width: 768px) and (max-width: 1024px)');

    return (
        <div>
            <Card sx={{ maxWidth: 308, mx: 'auto', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)', backgroundColor: 'white' }}>

                {/* Product_img */}
                {/* Note: Transparent or solid white background img required */}
                <div className='h-40 w-full bg-white flex items-center justify-center'>
                    <img className='max-h-32'
                        loading='lazy'
                        src={img}
                        alt={name} />
                </div>
                <div className='px-1.5 pb-2'>
                    <CardContent className='space-y-2 '>
                        {/* title */}
                        <h3 className='md:text-xl lg:text-2xl text-2xl text-gray-700 font-semibold text-center capitalize'>
                            {name}
                        </h3>
                        <div className='md:space-y-1.5 space-y-2 lg:space-y-2'>
                            <div className='flex justify-center space-x-5'>
                                {/* Amount */}
                                <span className='block text-sm md:text-xs lg:text-sm'>
                                    ± 1000 gm
                                </span>
                                {/* Price */}
                                <span className='block text-sm md:text-xs lg:text-sm'>
                                    ${price} USD
                                </span>
                            </div>

                            <div className='flex justify-center'>
                                <div className='flex items-center space-x-1'>
                                    {/* Rating */}
                                    <Rating
                                        size='small'
                                        name="product_ratings"
                                        value={reviews}
                                        readOnly
                                        precision={0.5}
                                        emptyIcon={<Star fontSize="inherit" />}
                                    />

                                    {/*Number of Reviews*/}
                                    <span className='text-sm md:text-xs lg:text-sm text-gray-500'>
                                        ( {reviewCount} Reviews )
                                    </span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                    <CardActions>
                        <Button
                            sx={{ textTransform: 'capitalize', marginX: 'auto', ":hover": { bgcolor: '#2e7d32', color: 'white', transition: 'all 235ms ease-in-out' } }}
                            fullWidth
                            size={isMediumScreen ? 'small' : 'medium'}
                            variant='outlined'
                            color='success'>
                            Add to cart
                        </Button>
                    </CardActions>
                </div>
            </Card>
        </div>
    );
};

// ProductCard Skeleton
export const ProductCardSkeleton = () => (
    <div>
        <Card sx={{ maxWidth: 308, mx: 'auto', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)', backgroundColor: 'white' }}>

            {/* Product_img */}
            <Skeleton
                variant='rectangular'
                height={170}
                width={'100%'} />

            <div className='px-1.5 pb-2'>
                <CardContent className='space-y-2' sx={{ pb: 1 }}>
                    {/* title */}
                    <Skeleton
                        sx={{ mx: 'auto' }}
                        variant='text'
                        height={'3rem'}
                        width={'55%'} />

                    <div className='md:space-y-1.5 space-y-2 lg:space-y-2'>
                        <div className='flex justify-center space-x-5'>
                            {/* Amount */}
                            <Skeleton
                                variant='text'
                                height={'1.3rem'}
                                width={'30%'} />

                            {/* Price */}
                            <Skeleton
                                variant='text'
                                height={'1.3rem'}
                                width={'25%'} />
                        </div>

                        <div className='flex justify-center'>
                            {/* Ratings */}
                            <Skeleton
                                variant='text'
                                height={'1.6rem'}
                                width={'80%'} />
                        </div>
                    </div>
                </CardContent>

                {/* Add To Cart Btn */}
                <CardActions sx={{ pt: 0 }}>
                    <Skeleton
                        variant='rounded'
                        height={'1.9rem'}
                        width={'100%'} />
                </CardActions>
            </div>
        </Card>
    </div>
)
export default ProductCard;