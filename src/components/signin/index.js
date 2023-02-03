import { Formik } from 'formik';
import * as yup from 'yup';
import { Box, Heading, FormControl, FormLabel, FormErrorMessage, Input, Flex, Button, Card, CardBody } from '@chakra-ui/react';

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8, 'The password must contain 8 or more characters with atleast one of each: uppercase, lowercase, number and special')
        // eslint-disable-next-line no-useless-escape
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, 'The password must contain 8 or more characters with atleast one of each: uppercase, lowercase, number and special')
        .required()
})

const Signin = () => {
    return (
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            validationSchema={schema}
            onSubmit={(values, { resetForm }) => {
                // handle form submit
            }}
        >
            {({ values, handleChange, handleBlur, handleSubmit, errors, touched }) =>
                <form onSubmit={handleSubmit}>
                    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                        <Card w='30%' mt='30px' mb='30px'>
                            <CardBody>
                                <Heading class='text-2xl font-semibold text-center' as='h1' size='lg'>Sign In</Heading>
                                <Flex direction='column' class='w-1/4'>
                                    <FormControl mt="15px" isRequired isInvalid={errors.email && touched.email}>
                                        <FormLabel>Email</FormLabel>
                                        <Input id='email' name='email' type='email' placeholder='Enter your username' value={values.email} onChange={handleChange} onBlur={handleBlur} />
                                        <FormErrorMessage>{errors.email}</FormErrorMessage>
                                    </FormControl>
                                    <FormControl mt="15px" isRequired isInvalid={errors.password && touched.password}>
                                        <FormLabel>Password</FormLabel>
                                        <Input id='password' name='password' type='password' placeholder='Enter your password' value={values.password} onChange={handleChange} onBlur={handleBlur} />
                                        <FormErrorMessage>{errors.password}</FormErrorMessage>
                                    </FormControl>
                                    <Flex justify='flex-start' mt="20px">
                                        <Button type='submit' class="w-52 h-10 bg-gray-200 rounded-full hover:bg-blue-500 hover:text-white hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:text-white focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-lg transition duration-150 ease-in-out">Signin</Button>
                                    </Flex>
                                </Flex>
                            </CardBody>
                        </Card>
                    </Box>
                </form>}
        </Formik>
    )
}

export default Signin;