import { Formik } from 'formik';
import * as yup from 'yup';
import { Box, Button, Card, CardBody, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input } from '@chakra-ui/react';

const schema = yup.object().shape({
    email: yup.string().email().required(),
});

const Newsletter = () => {
    return (
        <Formik
            initialValues={{
                email: ''
            }}
            validationSchema={schema}
            onSubmit={(values, { resetForm }) => {
                // handle form submit
            }}
        >
            {({ values, handleChange, handleBlur, handleSubmit, errors, touched }) =>
                <form onSubmit={handleSubmit}>
                    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                        <Card w='40%' mt='30px'>
                            <CardBody>
                                <Heading class='text-2xl font-semibold text-center' as='h1' size='lg'>Newsletter</Heading>
                                <Flex class='w-1/4'>
                                    <FormControl mt="15px" isRequired isInvalid={errors.email && touched.email}>
                                        <FormLabel>Email</FormLabel>
                                        <Input id='email' name='email' type='email' placeholder='Enter your email' value={values.email} onChange={handleChange} onBlur={handleBlur} />
                                        <FormErrorMessage>{errors.email}</FormErrorMessage>
                                    </FormControl>
                                    <Flex justify='flex-start' mt="45px" ml="15px">
                                        <Button type='submit' class="w-52 h-10 bg-gray-200 rounded-full hover:bg-blue-500 hover:text-white hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:text-white focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-lg transition duration-150 ease-in-out">Subscribe</Button>
                                    </Flex>
                                </Flex>
                            </CardBody>
                        </Card>
                    </Box>
                </form>
            }
        </Formik>
    )
}

export default Newsletter;