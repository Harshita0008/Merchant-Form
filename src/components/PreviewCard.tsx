"use client"
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { FerrisWheel } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Label } from './ui/label'
import { Input } from './ui/input'

type previewCardProps = {
  name: string,
  price: string,
  currencyOption: "USD",
  theme: string | undefined,
  productName: string,
}

const PreviewCard = ({ name, price, currencyOption , theme, productName} : previewCardProps) => {
  console.log(theme)
  return (
    <Card className="w-full md:w-[330px] rounded-3xl">
              <CardHeader className="rounded-t-3xl text-white" style={{background : theme}}>
                <CardTitle className="flex justify-between">
                  <h1 className="text-sm">{ name ? name : "Company name"}</h1>
                  <FerrisWheel />
                </CardTitle>
                <CardDescription className="text-white">
                  <div className='flex gap-2'>
                    <h1 className='text-xl font-semibold'>
                      {currencyOption}
                    </h1>
                    <h1 className="text-xl font-semibold  ">
                    {currencyOption === "USD" ? "$" : "£"}{price ? price : "160"}
                    </h1>
                  </div>
                  <h3 className="font-semibold my-4 tracking-wider">{productName ? productName : "Product Name"}</h3>
                  <div className="flex justify-between my-2">
                    <span>{ name ? name : "Company name"}</span>
                    <span>{currencyOption === "USD" ? "$" : "£"}{price ? price : "160"}</span>
                  </div>
                  <p className="border-b border-gray-400"></p>
                  <div className="flex justify-between my-2">
                    <span>Total</span>
                    <span>{currencyOption === "USD" ? "$" : "£"}{price ? price : "160"}</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-4">
                <h3 className="font-semibold mb-4">Pay with crypto</h3>
              
                    <form>
                      <div className="grid w-full items-center gap-4">
                      <Select
                            defaultValue={"USDT-Arbitrum"}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select Payment Options" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="USDT-Arbitrum">USDT-Arbitrum</SelectItem>
                              <SelectItem value="USDT-Trc20<">USDT-Trc20</SelectItem>
                              <SelectItem value="ETH">ETH</SelectItem>
                              <SelectItem value="USDC-Erc20">USDC-Erc20</SelectItem>
                              <SelectItem value="USDT-Erc20">USDT-Erc20</SelectItem> 
                            </SelectContent>
                          </Select>
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="name">Name</Label>
                          <div className="py-4 px-10 border bg-white rounded"></div>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="email">E-mail</Label>
                          <div className="py-4 px-10 border bg-white rounded"></div>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="phone">Phone</Label>
                          <div className="py-4 px-10 border bg-white rounded"></div>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="quantity">Quantity</Label>
                          <div className="py-4 px-10 border bg-white rounded"></div>
                        </div>
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                  <div className="py-2 px-20 bg-[#8c52ff] rounded-full font-bold text-white hover:bg-[#7846d6]" style={{background : theme , cursor: 'default'}}>
                Pay
                </div>
              </CardFooter>
          </Card>
  )
}

export default PreviewCard
