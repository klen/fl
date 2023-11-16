import { getDaemonProps } from "@/utils"
import { propertiesToIndex } from "@/utils/generators/utils"
import { redirect } from "next/navigation"

export default function Page() {
  return redirect(`/daemon/${propertiesToIndex(getDaemonProps())}`)
}
